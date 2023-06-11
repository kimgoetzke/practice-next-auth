import Layout from "../components/layout"

export default function ClientPage() {
  return (
    <Layout>
      <h1 className="default" >Client side rendering</h1>
      <p className="text-pink-700 font-bold text-lg">The content of this page is copied from the <a href="https://github.com/nextauthjs/next-auth-example">NextAuth.js example project</a> on GitHub to show differences in rendering.</p>
      <p className="default">
        This page uses the <strong>useSession()</strong> React Hook in the{" "} <strong>&lt;Header/&gt;</strong> component.
      </p>
      <p className="default">
        The <strong>useSession()</strong> React Hook is easy to use and allows pages to render very quickly.
      </p>
      <p className="default">
        The advantage of this approach is that session state is shared between pages by using the <strong>Provider</strong> in <strong>_app.js</strong>{" "}
        so that navigation between pages using <strong>useSession()</strong> is very fast.
      </p>
      <p className="default">
        The disadvantage of <strong>useSession()</strong> is that it requires client side JavaScript.
      </p>
    </Layout>
  )
}
