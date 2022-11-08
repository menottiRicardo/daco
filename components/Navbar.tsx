import Link from "next/link";
import React from "react";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const Navbar = ({
  next,
  back,
  current,
}: {
  next: string;
  back: string;
  current: string;
}) => {
  return (
    <nav className="pt-1">
      <ul className="flex justify-between mx-2">
        <Link
          href={`/${back}`}
          className="flex items-center gap-x-1 cursor-pointer animated-underline-left font-latoBold"
        >
          <motion.li
            className="text-2xl"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.5,
            }}
          >
            {current}
          </motion.li>
        </Link>
        <Link
          href={`/${next.toLocaleLowerCase()}`}
          className="flex items-center gap-x-1 cursor-pointer animated-underline"
        >
          <motion.li
            className=""
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.5,
            }}
          >
            {next}
          </motion.li>
          <ArrowLongRightIcon className="w-5" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
