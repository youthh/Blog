import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { i18n } from "next-i18next";
import CredentialsProvider from "next-auth/providers/credentials";

const getLocalizedPath = (path: string) =>
  i18n?.language ? `/${i18n.language}${path}` : path;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials: any) {
        return {
          id: "1",
          Email: credentials.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: getLocalizedPath("/signIn"),
    signOut: "/singOut",
    newUser: "/signUp",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
