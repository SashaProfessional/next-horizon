"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Routes } from "@/constants/routes";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace(Routes.DASHBOARD);
  }, []);

  return null;
}
