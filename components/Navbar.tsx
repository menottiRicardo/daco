import Link from "next/link";
import React from "react";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <nav className="pt-1">
      <ul className="flex justify-between mx-2">
        <Link
          href={"/"}
          className="flex items-center gap-x-1 cursor-pointer animated-underline-left font-latoBold"
        >
          <li className="text-2xl">Design</li>
        </Link>
        <Link
          href={"/automation"}
          className="flex items-center gap-x-1 cursor-pointer animated-underline"
        >
          <li>Automation</li>
          <ArrowLongRightIcon className="w-5" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
