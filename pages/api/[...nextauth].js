import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    callbacks: {
        session({ session, token, user }) {
            return session
        },
    },
  // Configure one or more authentication providers
    providers: [
    // ...add more providers here
  ],
})