import React from "react"
import { NextPage } from "next"
interface Props {}
const Page: NextPage<Props> = ({}) => {
  const handlePost = async () => {
    const po = await fetch("/api/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then(re=>re.json())
    console.log(po);
    
  }
  return (
    <div>
      <ButtonLogin />
      <button onClick={handlePost}>Post hello</button>
    </div>
  )
}
export default Page

import { useSession, signIn, signOut } from "next-auth/react"

const ButtonLogin = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
