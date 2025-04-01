import { NextResponse } from "next/server";
import { createHash } from "crypto";

import { prisma } from "@/lib/prisma";
import { Routes } from "@/constants/routes";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, password } = body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "Email is already taken" },
      { status: 400 }
    );
  }

  await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: createHash("sha256").update(password).digest("hex"),
    },
  });

  return NextResponse.redirect(Routes.DASHBOARD);
}
