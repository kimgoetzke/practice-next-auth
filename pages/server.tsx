import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Layout from "../components/layout"

import type { GetServerSidePropsContext } from "next"
import { useSession } from "next-auth/react"

export default function ServerSidePage() {
  const { data: session } = useSession()
  return (
    <Layout>
      <h1>Server side rendering</h1>
      <p className="warning">The content of this page is copied from the <a href="https://github.com/nextauthjs/next-auth-example">NextAuth.js example project</a> on GitHub to show differences in rendering.</p>
      <p>
        This page uses the <strong>getServerSession()</strong> method in{" "}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>getServerSession()</strong> in{" "}
        <strong>getServerSideProps()</strong> is the recommended approach if you
        need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
      <h2>Session</h2>
      <pre className="code"><code>{JSON.stringify(session, null, 2)}</code></pre>
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  }
}
