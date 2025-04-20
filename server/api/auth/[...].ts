import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const runtimeConfig = useRuntimeConfig()
const prisma = new PrismaClient()

export default NuxtAuthHandler({
  secret: runtimeConfig.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages:{signIn:'/login'},
  providers: [
    // @ts-expect-error
    GoogleProvider.default({
      clientId: runtimeConfig.GOOGLE_CLIENT_ID,
      clientSecret: runtimeConfig.GOOGLE_CLIENT_SECRET,
    }),
    // @ts-expect-error
    GithubProvider.default({
      clientId: runtimeConfig.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
  ],
})
