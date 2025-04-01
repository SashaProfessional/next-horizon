"use client";

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
import { VALIDATION_RESET_PASSWORD_SCHEMA } from "@/lib/validation-reset-password-schema";

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(VALIDATION_RESET_PASSWORD_SCHEMA),
  });

  const onSubmit = async (data: unknown) => {
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        reject(null);
      }, 2000)
    ).catch(() => {
      setError("email", {
        type: "manual",
        message: "Email is not registered",
      });
      // setError("email", {
      //   type: "manual",
      //   message: "Network error. Please check your internet connection.",
      // });
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-secondary">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Reset Password</CardTitle>
              <CardDescription>
                Provide the email address associated with your account to recover your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      id="email"
                      autoComplete="off"
                    />
                    <ErrorMessage message={errors?.email?.message} />
                  </div>
                  {isSubmitting ? (
                    <Button type="submit" className="w-full" disabled>
                      <Loader2 className="animate-spin" />
                      Resetting Password
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full">
                      Reset Password
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
