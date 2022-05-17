// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

type Data = {
  name?: string
  message?:string
}

export default async function handler(
  req:NextApiRequest,
  res: NextApiResponse<Data>
) {
const session=await getSession({req})
console.log(session);
  if(req.method==='GET'){
    res.status(200).json({ name: "John Doe" })
  }
  if(req.method==='POST' && session){
    res.status(201).json({message:"todo ok"})
  }else{
    res.status(201).json({message:"todo out"})

  }
}
