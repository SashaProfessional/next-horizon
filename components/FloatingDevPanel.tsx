"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/routes";

export default function FloatingDevPanel() {
  const pathname = usePathname();
  const { status } = useSession();

  const setNativeValue = (element, value) => {
    const valueSetter = Object.getOwnPropertyDescriptor(
      element.__proto__,
      "value"
    ).set;
    valueSetter.call(element, value);

    element.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const fillLoginForm = () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    setNativeValue(emailInput, "bob@mail.com");
    setNativeValue(passwordInput, "bobbob");
  };

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
              className={
                "bg-orange-700 hover:bg-orange-900 hover:px-8" +
                (isDisabled ? "" : " cursor-pointer")
              }
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
      <div>{status}</div>

      {pathname === Routes.LOGIN && (
        <Button
          className={
            "bg-green-700 hover:bg-green-900 hover:px-8 cursor-pointer w-fit"
          }
          onClick={fillLoginForm}
        >
          Fill Login Form
        </Button>
      )}
    </div>
  );
}
