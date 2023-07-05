import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/google";
import { prisma } from "./detaDB";

import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    
  ],
  events:{
    async signIn({ user, account, profile, email, credentials }) {
const new_user=await prisma.user.upsert({
  where:{email:user.email},
  update:{avatar:user.image,name:user.name},
  create:{name:user.name,email:user.email,avatar:user.image}

})
//console.log(new_user)
    }
  }
}