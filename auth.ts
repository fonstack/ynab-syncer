import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectMongoDb } from "./lib/db";
import UserModel from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn(params) {
      const { user, account } = params;

      if (account?.provider === "google" && user.email) {
        await connectMongoDb();
        const userExists = await UserModel.findOne({ email: user.email });
        if (userExists) return true;

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
            }),
          });

          if (res.ok) return true;
          return false;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return false;
    },
  },
});
