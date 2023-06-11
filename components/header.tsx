import { signIn, signOut, useSession } from "next-auth/react"
import Navbar from "./navbar"

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header>
      <Navbar />
      <div className="container w-6/12 mx-auto content-center justify-between bg-slate-100 rounded-lg">
        <p className="font-normal text-center">
          {!session && (
            <>
              <span>You are not signed in:&nbsp;&nbsp;</span>
              <a className="default"
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn('google')
                }}>
                Sign in with Google
              </a> | <a className="default"
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}>
                Choose provider
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span>
                <small>Signed in as:&nbsp;&nbsp;</small>
                <br />
                <strong>{session.user.name} ({session.user.email})&nbsp;&nbsp;</strong>
              </span>
              <a className="default"
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
