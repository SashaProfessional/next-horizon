"use client";

import Link from "next/link";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Routes } from "@/constants/routes";
import { CHART_DATA } from "@/mocks/chart-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  return (
    <div>
      <header className="flex items-center justify-between px-8 py-2 bg-gray-800 text-white">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              aria-label="Menu"
              className="flex items-center space-x-2 h-11"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://i.pravatar.cc/300"
                  alt="User Avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Menu className="w-11 h-8" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={Routes.ACCOUNT}>Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={Routes.LOGOUT}>Log Out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="w-full max-w-7xl p-4">
          <div className="flex justify-center">
            <Line data={CHART_DATA} />
          </div>
        </div>
      </div>
    </div>
  );
}
