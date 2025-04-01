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

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 80, 50, 60, 45, 70],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Цвет под линией
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 2,
    },
    {
      label: "User Growth",
      data: [30, 35, 45, 40, 42, 50, 55, 60, 58, 62, 65, 70], // Уменьшены значения
      fill: true,
      backgroundColor: "rgba(153, 102, 255, 0.2)", // Цвет под линией
      borderColor: "rgb(153, 102, 255)",
      borderWidth: 2,
    },
    {
      label: "Revenue",
      data: [35, 40, 50, 45, 60, 65, 70, 75, 80, 90, 100, 110],
      fill: true,
      backgroundColor: "rgba(255, 159, 64, 0.2)", // Цвет под линией
      borderColor: "rgb(255, 159, 64)",
      borderWidth: 2,
    },
  ],
};

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
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
