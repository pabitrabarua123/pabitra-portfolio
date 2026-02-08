"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/Context";

const Nav = () => {
  const pathname = usePathname();
  const { showItem, setShowItem } = useAppContext();
  const [showPage, setShowPage] = useState(true);

  const isActive = (href) => pathname.startsWith(href);

  return (
    <>
      <ul className="mainmenu">
        {/* <li>
          <Link href="/dashboard">Welcome</Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-relative">
          <a
            href="#"
            onClick={() => setShowItem(!showItem)}
          >
            Dashboard
          </a>
        </li> */}
        <li className="with-megamenu has-menu-child-item position-relative">
          <a
            href="https://github.com/pabitrabarua123"
            target="_blank"
            className="brand-name"
          >
            @pabitra-dev
          </a>
        </li>
        {/* <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li> */}
      </ul>
    </>
  );
};

export default Nav;
