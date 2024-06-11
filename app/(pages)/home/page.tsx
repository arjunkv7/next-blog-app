// components/AppBar.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react";

import { useRouter } from 'next/router';

const AppBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

  // Mock user authentication state
  useEffect(() => {
    // Check user authentication state here
    // For now, we'll just set it to true for demonstration
    setIsLoggedIn(true); // Set to true or false based on actual authentication status
  }, []);

  return (
    <div className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-xl font-bold">MyBlog</p>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex items-center space-x-4">
          <Link href="/about">
            <p className="text-gray-700 hover:text-gray-900">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-700 hover:text-gray-900">Contact</p>
          </Link>
        </nav>

        {/* Profile Options */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <p className="text-gray-700 hover:text-gray-900">Profile</p>
              </Link>
              <button
                onClick={() => {
                  // Handle sign out
                  setIsLoggedIn(false);
                //   router.push('/');
                }}
                className="text-gray-700 hover:text-gray-900"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/signin">
              <p className="text-gray-700 hover:text-gray-900">Sign In</p>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => {
              // Handle mobile menu toggle
            }}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/about">
            <p className="block text-gray-700 hover:text-gray-900">About</p>
          </Link>
          <Link href="/contact">
            <p className="block text-gray-700 hover:text-gray-900">Contact</p>
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <p className="block text-gray-700 hover:text-gray-900">Profile</p>
              </Link>
              <button
                onClick={() => {
                  // Handle sign out
                  setIsLoggedIn(false);
                //   signOut()
                //   router.push('/');
               
                }}
                className="block text-gray-700 hover:text-gray-900 w-full text-left"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => signIn()}>
              <p className="block text-gray-700 hover:text-gray-900">Sign In</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
