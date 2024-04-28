import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
];
const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col md:flex-row items-center gap-8">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className={`${
            pathname === link.href && "text-primary font-semibold"
          }  `}
        >
          {link.label}
        </Link>
      ))}
      <Button asChild className="px-8">
        <Link href={"/contact"}>Contact Us</Link>
      </Button>
    </nav>
  );
};

export default Navigation;
