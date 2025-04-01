"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/routes";

export default function FloatingDevPanel() {
  const pathname = usePathname();

  return (
    <div className="fixed top-18 left-4 flex flex-col gap-2">
      {Object.keys(Routes).map((key) => {
        const route = Routes[key as keyof typeof Routes];
        const buttonText = key
          .toLowerCase()
          .replace("_", " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        const isDisabled = pathname === route;

        return (
          <Link
            key={key}
            href={route}
            className={isDisabled ? "opacity-50 cursor-not-allowed" : ""}
          >
            <Button
              disabled={isDisabled}
              className={"bg-orange-700 hover:bg-orange-900 hover:px-8" + (isDisabled ? "" : " cursor-pointer")}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault();
                }

                e.stopPropagation();
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
