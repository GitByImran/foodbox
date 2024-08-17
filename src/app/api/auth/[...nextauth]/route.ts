import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     session.user = user;
  //     return session;
  //   },
  // },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
