import { randomBytes, randomUUID } from "crypto"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/new-user'
  },
  session: {
    // Learn more about sessions: 
    // https://next-auth.js.org/configuration/options#session
    strategy: 'jwt',
    maxAge: 60 * 5,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
   },
  callbacks: {
    // Learn more about refresh token rotations here: 
    // https://authjs.dev/guides/basics/refresh-token-rotation
    async jwt({ token }) {
      token.custom_property = randomUUID?.() ?? randomBytes(32).toString("hex")
      return token
    },
  },
}

export default NextAuth(authOptions)
