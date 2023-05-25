import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header>
      <nav className="flex flex-row justify-center items-center flex">
        <ul className="container mx-auto navItem">
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/protected">Protected</Link>
          </li>
          <li className="navItem">
            <Link href="/endpoints">Endpoints</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      <div className="h-48">
        <p className="set-font">
          {!session && (
            <>
              <span>You are not signed in:&nbsp;&nbsp;</span>
              <a href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn('google')
                  }}>
                Sign in with Google
              </a> | <a href={`/api/auth/signin`}
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
                <strong>{session.user.name} ({ session.user.email })&nbsp;&nbsp;</strong>
              </span>
              <a
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
        <hr/>
      </div>
    </header>
  )
}
