import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">My Project</h1>
        <nav className="flex space-x-6">
          <Link href="/home" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-200">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
