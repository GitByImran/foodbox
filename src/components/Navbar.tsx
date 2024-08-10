import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const menus = [
  { label: "Home", goto: "/" },
  { label: "Menu", goto: "/menu" },
  { label: "Cart", goto: "/cart" },
  { label: "Contact", goto: "/contact" },
];

const Navbar = () => {
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
        <div className="flex items-center gap-8">
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
          <div>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
