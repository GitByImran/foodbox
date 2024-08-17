"use client";

import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Box, LogIn, UserRound } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const menus = [
  { label: "Home", goto: "/" },
  { label: "Menu", goto: "/menu" },
  { label: "Cart", goto: "/cart" },
  { label: "Contact", goto: "/contact" },
];

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header>
      <nav className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        <div className="logo flex items-center gap-4">
          <img
            src="/images/fast-food.png"
            alt="Foodbox Logo"
            className="h-12 w-auto"
          />
          <h2 className="text-primary text-4xl font-bold">Foodbox</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="navmenu hidden sm:block">
            <ul className="flex gap-6">
              {menus.map(({ label, goto }, index) => (
                <li key={index} className="relative flex items-center">
                  <Link
                    href={goto}
                    className="text-base font-semibold capitalize"
                  >
                    {label}
                  </Link>
                  {label === "Cart" && (
                    <button className="absolute text-sm -top-4 -right-4 h-5 w-5 bg-primary text-white rounded-full">
                      9
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="select-none focus:outline-transparent">
                  <AvatarImage
                    src={session?.user?.image!}
                    alt={session?.user?.name!}
                  />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 max-w-full">
                <Link href="/user/profile">
                  <DropdownMenuItem className="text-base flex items-center justify-between group">
                    <span>Profile</span>
                    <UserRound
                      size={20}
                      className="mr-2 hidden group-hover:block"
                    />
                  </DropdownMenuItem>
                </Link>
                <Link href="/user/profile">
                  <DropdownMenuItem className="text-base flex items-center justify-between group">
                    <span>Orders</span>
                    <Box size={20} className="mr-2 hidden group-hover:block" />
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button variant="outline" onClick={() => signOut()}>
                    Sign Out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth/login">
              <Button variant="outline" className="text-base font-semibold">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
