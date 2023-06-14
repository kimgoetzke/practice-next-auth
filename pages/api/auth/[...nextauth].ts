import { randomBytes, randomUUID } from "crypto"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CognitoProvider from "next-auth/providers/cognito"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        }
      }
    }),
    CognitoProvider({
      id: "cognito",
      name: "Cognito identity provider",
      clientId: process.env.COGNITO_IDP_ID,
      clientSecret: process.env.COGNITO_IDP_SECRET,
      issuer: process.env.COGNITO_IDP_ISSUER_URL,
      idToken: true,
      checks: ['pkce', 'nonce'],
      profile: (_profile) => {
        return {
          id: _profile.sub,
          name: _profile.given_name + " " + _profile.family_name,
          email: _profile.email,
          image: null
        };
      },
    }),
    CognitoProvider({
      id: "cognito-broker",
      name: "Cognito identity broker",
      clientId: process.env.COGNITO_BROKER_ID,
      clientSecret: "",
      issuer: process.env.COGNITO_BROKER_ISSUER_URL,
      client: {
        token_endpoint_auth_method: "none",
      },
      idToken: true,
      checks: ['pkce', 'nonce'],
      profile: (_profile) => {
        return {
          id: _profile.sub,
          name: _profile.given_name + " " + _profile.family_name,
          email: _profile.email,
          image: null
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin'
  },
  session: {
    // Learn more about sessions: 
    // https://next-auth.js.org/configuration/options#session
    strategy: 'jwt',
    maxAge: 60 * 5,
    generateSessionToken: () => {
      return "SESH~" + randomUUID?.()
    }
  },
  callbacks: {
    // Learn more about refresh token rotations here: 
    // https://authjs.dev/guides/basics/refresh-token-rotation
    async jwt({ token, account }) {
      token.custom_property = randomUUID?.() ?? randomBytes(32).toString("hex")
      if (account && account.id_token) {
        token.id_token = account.id_token
      }
      return Promise.resolve(token)
    },
  },
  // For debugging:
  // events: {
  //   async signIn({ user, account, profile }) {
  //     console.log(`xxx signIn profile=${JSON.stringify(profile, null, 2)}`)
  //     console.log(`xxx signIn user=${JSON.stringify(user, null, 2)}`)
  //     console.log(`xxx signIn account.id_token=${JSON.stringify(account?.id_token, null, 2)}`)
  //   },
  // },
  debug: true,
}

export default NextAuth(authOptions)
