"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@/components/ErrorMessage";
import { VALIDATION_REGISTRATION_SCHEMA } from "@/lib/validation-registration-schema";

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(VALIDATION_REGISTRATION_SCHEMA),
  });

  const onSubmit = async (data: unknown) => {
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        reject(null);
      }, 2000)
    ).catch(() => {
      setError("email", {
        type: "manual",
        message: "Email is already taken",
      });
      setError("terms", {
        type: "manual",
        message: "Network error. Please check your internet connection.",
      });
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-secondary">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Create your account. It&apos;s free and only takes a minute.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-2 flex-1">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        {...register("firstName")}
                        id="first-name"
                        autoComplete="off"
                      />
                      <ErrorMessage message={errors?.firstName?.message} />
                    </div>
                    <div className="grid gap-2 flex-1">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        {...register("lastName")}
                        id="last-name"
                        autoComplete="off"
                      />
                      <ErrorMessage message={errors?.lastName?.message} />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      id="email"
                      placeholder="email@example.com"
                      autoComplete="off"
                    />
                    <ErrorMessage message={errors?.email?.message} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      {...register("password")}
                      id="password"
                      type="password"
                    />
                    <ErrorMessage message={errors?.password?.message} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      {...register("confirmPassword")}
                      id="confirm-password"
                      type="password"
                    />
                    <ErrorMessage message={errors?.confirmPassword?.message} />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        {...register("terms", { required: true })}
                        className="w-4 h-4"
                      />
                      <label htmlFor="terms" className="text-sm font-medium">
                        I accept the&nbsp;
                        <Link
                          href="https://okfn.org/en/terms-of-use/"
                          className="text-primary underline"
                        >
                          Terms of Use
                        </Link>
                        &nbsp;and&nbsp;
                        <Link
                          href="https://www.pwc.com.au/about-us/social-impact/Privacy-Policy-Template.docx.pdf"
                          className="text-primary underline"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    <ErrorMessage message={errors?.terms?.message} />
                  </div>
                  {isSubmitting ? (
                    <Button type="submit" className="w-full" disabled>
                      <Loader2 className="animate-spin" />
                      Registring
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full">
                      Register
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
