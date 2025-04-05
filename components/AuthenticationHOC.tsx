"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { AuthenticationStatus } from "@/enums/authentication-status";
import { Routes } from "@/constants/routes";

export function AuthenticationHOC({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === AuthenticationStatus.Unauthenticated) {
      router.push(Routes.LOGIN);
    }
  }, [status, router]);

  if (status === AuthenticationStatus.Loading) {
    return <div>Loading...</div>; // Здесь можно поставить спиннер
  }

  return <>{children}</>;
}
