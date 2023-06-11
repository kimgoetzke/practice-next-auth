import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import Layout from "../../components/layout";

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Layout>
        <h1 className="default">Identity provider</h1>
        <p className="default">This is a custom identity provider selection page. Please select provider:</p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="default" onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
            <br/><br/>
          </div>
        ))}
      </Layout>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    console.log("User is already logged in. Redirecting...")
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  }
}