"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/routes";

export default function FloatingDevPanel() {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-4 flex gap-4">
      {Object.keys(Routes).map((key) => {
        const route = Routes[key as keyof typeof Routes];
        const buttonText =
          key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
        const isDisabled = pathname === route;

        return (
          <Link
            key={key}
            href={route}
            className={isDisabled ? "opacity-50 cursor-not-allowed" : ""}
          >
            <Button
              disabled={isDisabled}
              className={isDisabled ? "" : "cursor-pointer"}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault();
                }

                e.stopPropagation()
              }}
            >
              {buttonText}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
