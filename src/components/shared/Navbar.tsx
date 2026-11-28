"use client";

import { useState } from "react";
import Link from "next/link";
import { GitCompareArrows, Globe, Link2, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services", icon: Link2 },
  { label: "Compare", href: "/compare", icon: GitCompareArrows },
  { label: "About Us", href: "/about-us", icon: Globe },
] as const;

const bookLink = {
  href: "/book-now",
  label: "Book Now",
  className:
    "inline-flex h-10 items-center justify-center rounded-[7px] bg-[#FFC000] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#E5B000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F1F1F]",
};

const Navbar = () => {
 

  return (
    <nav className="w-full bg-[#FEFEFF] border shadow-2xl text-[#1F1F1F]">
      <div className="mx-auto flex h-[52px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2.5 text-sm font-medium transition-colors hover:text-[#C99A00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC000]"
            >
              <Icon className="size-[18px]" strokeWidth={2} aria-hidden="true" />
              <span className="whitespace-nowrap">{label}</span>
            </Link>
          ))}
        </div>

        <Link href={bookLink.href} className={`hidden w-[200px] md:inline-flex ${bookLink.className}`}>
          {bookLink.label}
        </Link>

      </div>

     
    </nav>
  );
};

export default Navbar;
