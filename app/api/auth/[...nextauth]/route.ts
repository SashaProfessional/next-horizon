import crypto from "crypto";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user || !verifyPassword(credentials?.password, user.password)) {
          return null;
        }

        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const verifyPassword = (inputPassword: string | undefined, storedPassword: string) => {
  if (!inputPassword) return false;

  const hashedInputPassword = crypto
    .createHash("sha256")
    .update(inputPassword)
    .digest("hex");

  return hashedInputPassword === storedPassword;
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
