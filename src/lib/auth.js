import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { ConnectToDb } from "./utils";
import { User } from "./models";

import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    // console.log("in login cred ", credentials);
    // console.log("auth login 1");
    await ConnectToDb();
    const user = await User.findOne({ username: credentials.username });
    // console.log("user ", user);
    if (!user) {
      return { error: "Wrong Credentials" };
    }
    // console.log("auth login 2");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return { error: "Password is incorrect" };
    }
    // console.log("auth login 3");
    return user;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        // console.log("credentials ", credentials);
        // console.log("in 1st credentials");
        await ConnectToDb();
        try {
          const user = await User.findOne({ username: credentials.username });
          // console.log("in try credentials");
          // if (
          //   credentials.email === "k@gmail.com" &&
          //   credentials.password === "asdfghjkl"
          // ) {
          //   console.log("User authenticated successfully");
          //   console.log(user);
          //   return user;
          // }
          // // console.log("user in auth ", user);
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
      // async authorize(credentials) {
      //   console.log("Authorizing credentials:", credentials);
      //   // const db = await clientPromise;
      //   await ConnectToDb()
      //   const user = await User.findOne({ username: credentials.username });

      //   if (!user) {
      //     console.log("No user found with that username");
      //     throw new Error("Wrong Credentials");
      //   }
      //   console.log("user ",user);

      //   const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
      //   if (!isPasswordCorrect) {
      //     console.log("Password is incorrect");
      //     throw new Error("Wrong Credentials");
      //   }

      //   console.log("User authorized:", user);
      //   return user;
      // }
    }),
  ],
  // to store in db
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log(user, account, profile);
      if (account.provider === "github") {
        await ConnectToDb();
        try {
          const user = await User.findOne({
            email: profile.email || "krish@gmail.com",
          });

          if (!user) {
            const newUser = new User({
              username: profile.login || `user_${Date.now()}`,
              // UserName:profile.login || `user_${Date.now()}`,
              email: profile.email || "krish@gmail.com",
              img: profile.avatar_url || "gjndfjgnd",
            });
            await newUser.save();
            // return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
        return true;
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
