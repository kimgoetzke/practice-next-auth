import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="default" >Home</h1>
      <p className="default">
        This is a practice project that uses {" "}
        <a className="default" href="https://next-auth.js.org">NextAuth.js</a> for authentication.
        To use it, you need to duplicate the .env.template file, rename it to .env, and insert the properties for your identity provider(s).
      </p>
    </Layout>
  )
}
