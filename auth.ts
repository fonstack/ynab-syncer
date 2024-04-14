import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { v4 as uuidv4 } from "uuid";
import * as UserService from "./services/user.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn(params) {
      const { account, user } = params;

      if (account?.provider === "google" && user?.email) {
        const userExists = await UserService.getUserByEmail(user.email);
        if (userExists) return true;

        try {
          const res = await UserService.createUser({
            _id: user.id ?? uuidv4(),
            email: user.email,
            name: user.name ?? "",
          });

          if (res) return true;
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
