import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";

interface Props {
  id: string;
  name: string;
  href: string;
}

const navbar: Props[] = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Projects", href: "/projects" },
  { id: "3", name: "About", href: "/about" },
  { id: "4", name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex px-14 py-7 items-center justify-between bg-[#201e26]">
      <div>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="flex items-center justify-between w-1/2">
        <div>
          {navbar.map((item) => (
            <Link
              className="text-white  mr-10 hover:text-[#eead2b] font-semibold  hover:underline"
              key={item.id}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Button className="bg-[#eead2b] uppercase px-4 py-2 font-semibold rounded-lg">
            Reach out
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
