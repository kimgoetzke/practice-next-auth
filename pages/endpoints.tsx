import Layout from "../components/layout"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function Endpoints() {
  const { data: session } = useSession()
  const [sessionContent, setSession] = useState()
  const [jwtContent, setJwt] = useState()

  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch("/api/endpoints/session")
      const json = await res.json()
      if (json.content) {
        setSession(json.content)
      }
    }
    const fetchJwt = async () => {
      const res = await fetch("/api/endpoints/jwt")
      const json = await res.json()
      if (json.content) {
        setJwt(json.content)
      }
    }
    fetchSession()
    fetchJwt()
  }, [session])

  return (
    <Layout>
      <h1 className="default" >Endpoints</h1>
      <p className="default">You must be signed in to see responses.</p>
      <h2 className="default" >Session</h2>
      <pre>/api/examples/session</pre>
      <pre className="code"><code>{JSON.stringify(sessionContent, null, 2)}</code></pre>
      <h2 className="default" >JWT</h2>
      <pre>/api/examples/jwt</pre>
      <pre className="code"><code>{JSON.stringify(jwtContent, null, 2)}</code></pre>
    </Layout>
  )
}
