import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { clientPromise } from "@src/server/util/mongodb";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),

  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.SECRET,
  },
  pages: {
    // signIn: "/home",
  },
  callbacks: {},
  events: {},
  debug: false,
});
