import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const clientId = process.env.GOOGLE_ID
const clientSecret = process.env.GOOGLE_SECRET
const secret = process.env.NEXTAUTH_SECRET

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    // ...add more providers here
    secret,
  ],
}
export default NextAuth(authOptions)
