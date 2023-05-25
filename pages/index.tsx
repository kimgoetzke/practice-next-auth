import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Home</h1>
      <p className="flex-center">
        This is an example project to practice using {" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}
