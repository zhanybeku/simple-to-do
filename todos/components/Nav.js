"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  return (
    <nav>
      <Link href="/">{usePathname() === "/" ? "To Do Lists" : "Back Home"}</Link>
    </nav>
  );
};

export default Nav;
