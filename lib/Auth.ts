import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

export const authOptions:AuthOptions= {
    pages:{
      signIn:"/auth/signin"
    },
  
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "User Name",
            type: "email",
            placeholder: "Your User Name",
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "password",
          },
        },
  
        async authorize(credentials) {
          if (!credentials || !credentials.password) {
            throw new Error("Please provide your password");
          }
  
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.username,
            },
          });
  
          if (!user) {
            throw new Error("User name or password not correct");
          }
  
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
  
          if (!isPasswordCorrect) {
            throw new Error("User name or password not correct");
          }
  
          const { password, ...userWithoutPass } = user;
          return userWithoutPass;
        },
      }),
    ],
  
    callbacks: {
      async jwt({token,user}){
        if(user) token.user =user as User;
        return token;
      },
  
      async session({token,session}){
        session.user=token.user;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };