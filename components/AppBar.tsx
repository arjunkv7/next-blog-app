"use client";
import { signIn, signOut } from "next-auth/react";
import { MouseEvent, useEffect, useRef, useState } from "react";

export const Appbar = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsNavbarVisible(false);
    } else {
      // Scrolling up
      setIsNavbarVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`flex content-center justify-between p-4 border shadow-md fixed top-0 left-0 w-full bg-white transition-transform duration-300 h-16 ${
          isNavbarVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-4">
          <Logo />
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1.5 gap-2 text-sm">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center gap-4">
          <div className="hidden content-center space-x-6 cursor-pointer dark:hover:text-black sm:flex">
            <WriteLogo /> Write
          </div>
          <img
            onClick={() => {
              setDropDownOpen(!dropdownOpen);
            }}
            className="avatar cursor-pointer block w-11 h-11 rounded-full bg-gray-400 object-cover"
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          />

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              id="dropdown"
              className="absolute top-14 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                className="py-2 text-sm text-gray-500 dark:text-gray-500"
                aria-labelledby="dropdownDefaultButton"
              >
                <li className="sm:hidden border border-b-2">
                  <a
                    href="#"
                    className="flex px-4 items-center py-2 dark:hover:text-black"
                  >
                    <WriteLogo /> Write
                  </a>
                </li>

                <li>
                  <a href="#" className="block px-4 py-2 dark:hover:text-black">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 dark:hover:text-black">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 dark:hover:text-black">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function Logo() {
  return (
    <svg
      className="w-6 h-6 ml-4"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
    >
      <style type="text/css"></style>
      <g>
        <path
          className="st0"
          d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844
        c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219
        c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906
        c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344
        v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594
        c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"
        />
        <path
          className="st0"
          d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313
        c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656
        c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656
        c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"
        />
      </g>
    </svg>
  );
}

function WriteLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
}
