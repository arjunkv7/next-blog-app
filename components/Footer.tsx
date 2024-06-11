import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-6">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
