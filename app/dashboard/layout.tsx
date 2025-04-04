import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { AuthenticationHOC } from "@/components/AuthenticationHOC";
import { Routes } from "@/constants/routes";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(Routes.LOGIN);
  }

  return <AuthenticationHOC>{children}</AuthenticationHOC>;
}
