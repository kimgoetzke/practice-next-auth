import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import AccessGranted from "../components/access-granted"

export default function ProtectedPage() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  return (
    <Layout>
      <AccessGranted />
    </Layout>
  )
}
