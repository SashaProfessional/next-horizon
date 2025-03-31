"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Routes } from "@/constants/routes";

export default function Content() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <div>Content</div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Link href={Routes.LOGIN}>Log In</Link>
            <Link href={Routes.REGISTER}>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
