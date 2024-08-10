import React from "react";
import Link from "next/link";
import { Home, List, ShoppingCart, Headset, Search } from "lucide-react";

const menus = [
  { label: "Search", icon: <Search />, goto: "/search" },
  { label: "Menu", icon: <List />, goto: "/menu" },
  { label: "Home", icon: <Home />, goto: "/" },
  { label: "Cart", icon: <ShoppingCart />, goto: "/cart" },
  { label: "Contact", icon: <Headset />, goto: "/contact" },
];

const Bottombar = () => {
  return (
    <div className="fixed w-full bottom-0 bg-gray-300">
      <div className="w-full py-4 px-4">
        <ul className="flex items-center justify-around gap-6">
          {menus.map(({ label, icon, goto }, index) => (
            <li key={index} className="relative flex items-center">
              <Link href={goto} className="text-base font-semibold capitalize">
                {icon}
              </Link>
              {label === "Cart" && (
                <button className="absolute text-sm -top-3 -right-4 h-5 w-5 bg-primary text-white rounded-full">
                  9
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
