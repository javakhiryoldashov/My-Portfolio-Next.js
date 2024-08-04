import React from "react";
import Link from "next/link";

export default function Navbar({ navlist }) {
  return (
    <>
      {navlist.map((item) => (
        <li key={item.name}>
          <Link
            href={`/#${item.path}`}
            className="block py-2 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
