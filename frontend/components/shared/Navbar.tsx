"use client";
import Link from "next/link";

import React, { useState } from "react";

import { Menu } from "lucide-react";
import { MobileNavigation } from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <h2 className="font-bold text-2xl text-primary">Fcources</h2>
            </Link>
          </div>
          <div className="hidden md:flex">
            <Navigation />
          </div>
          <Menu
            className="md:hidden cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
          <MobileNavigation open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
