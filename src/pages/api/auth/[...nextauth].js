import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const clientId = process.env.GOOGLE_ID
const clientSecret = process.env.GOOGLE_SECRET

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
