import Link from "next/link"

export default function AccessGranted() {
  return (
    <>
      <h1 className="default" >Access granted</h1>
      <p className="default">You can view this page because you are logged in.</p>
      <p className="default">See the differences between server and client side rendering here: <Link className="default" href="/client">Client</Link> vs <Link href="/server" className="default">Server</Link>.</p>
    </>
  )
}
