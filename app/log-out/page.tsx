"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import { Routes } from "@/constants/routes";

export default function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let reditectTimeout: NodeJS.Timeout;

    const logOutUser = async () => {
      await signOut({ redirect: false });
      setIsLoggingOut(false);

      reditectTimeout = setTimeout(() => router.push(Routes.LOGIN), 1000);
    };

    logOutUser();

    return () => {
      if (reditectTimeout) clearTimeout(reditectTimeout);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoggingOut ? (
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
      ) : (
        <p className="text-sm font-medium">
          You have been logged out successfully!
        </p>
      )}
    </div>
  );
}
