import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 p-4 text-white">
      <nav className="flex justify-center space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/home" className="hover:underline">
          Listings
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
