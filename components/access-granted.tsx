import Link from "next/link"

export default function AccessGranted() {
  return (
    <>
      <h1>Access granted</h1>
      <p>You can view this page because you are logged in.</p>
      <p>See the differences between server and client side rendering here: <Link href="/client">Client</Link> vs <Link href="/server">Server</Link>.</p>
    </>
  )
}
