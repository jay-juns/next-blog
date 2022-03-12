import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { verifyPassword } from '../../../types/auth'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "유저 이메일, 패스워드 방식",
      credentials: {
        email: { label: "유저 이메일", type: "email", placeholder: "user@email.com"},
        password: { label: "패스워드", type: "password"}
      },
        async authorize(credentials) {
          const user = await prisma.user.findUnique({
              where: {
                  email: String(credentials.email),
              },
              select: {
                  name: true, email: true, password: true
              },
          });

          if (!user) {
              throw new Error('No user found!');
          }

          const isValid = await verifyPassword(
              credentials.password,
              user.password
          );

          if (!isValid) {
              throw new Error('Could not log you in!');
          }
          return { name: user.name, email: user.email };
      }
      
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  secret: process.env.SECRET,
})