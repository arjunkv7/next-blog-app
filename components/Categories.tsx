import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <Link className="hover:underline" href="#">
              Design
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Development
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Marketing
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Business
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Technology
            </Link>
          </li>
        </ul>
        <h3 className="text-lg font-bold mt-8 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:underline"
            href="#"
          >
            Web Design
          </Link>
          <Link
            className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:underline"
            href="#"
          >
            Front-end
          </Link>
          <Link
            className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:underline"
            href="#"
          >
            Data Visualization
          </Link>
          <Link
            className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:underline"
            href="#"
          >
            Artificial Intelligence
          </Link>
          <Link
            className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:underline"
            href="#"
          >
            Marketing Strategy
          </Link>
        </div>
      </div>
    </>
  );
}
