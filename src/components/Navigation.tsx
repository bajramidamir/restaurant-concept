import React, { useState } from "react";

const Navigation = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    navState === false ? setNavState(!navState) : setNavState(!navState);
  };

  return (
    <div className="sticky top-0 bg-white shadow-md">
      <header className="p-3 dark:bg-slate-900 w-full md:max-w-5xl mx-auto font-montserrat font-medium">
        <div className="flex justify-between items-center mx-auto ">
          <div className="flex items-center">
            <a href="">
              <img src="/assets/rest.svg" className="w-12 h-12 cursor-pointer" />
            </a>
            
          </div>
          <button className="lg:hidden" onClick={toggleNav}>
            <img
              src="/assets/hamburger.svg"
              className={`w-12 absolute right-2 top-3 duration-300 ${navState ? 'rotate-90 scale-75' : 'rotate-0 scale-100'} `}
            />
          </button>

          {/* desktop navbar */}
          <nav className="hidden lg:flex">
            <ul>
              <li className="inline-block px-5">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-emerald-400"
                >
                  About
                </a>
              </li>
              <li className="inline-block px-5">
                <a
                  href="#menu"
                  className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-emerald-400"
                >
                  Menu
                </a>
              </li>
              <li className="inline-block px-5">
                <a
                  href="#reviews"
                  className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-emerald-400"
                >
                  Reviews
                </a>
              </li>
              <li className="inline-block px-5">
                <a
                  href="#info"
                  className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-emerald-400"
                >
                  Info
                </a>
              </li>
            </ul>
          </nav>
          <a href="#contact">
            <button className="duration-300 rounded-full hidden lg:flex px-3 py-2.5 bg-slate-200 hover:bg-slate-300 ">
              Contact
            </button>
          </a>
        </div>
      </header>

      {/* mobile navbar */}
      <div className={`duration-300 ease-in-out ${navState ? "scale-100" : "scale-0"}`}>
        <ul className={`lg:hidden absolute w-full bg-white font-montserrat text-lg font-semibold`}>
          <a href="#about"
            onClick={toggleNav}>
            <li className="px-5 border-b-2 py-2.5 w-full text-center">About</li>
          </a>
          <a href="#menu"
            onClick={toggleNav}>
            <li className="px-5 border-b-2 py-2.5 w-full text-center">Menu</li>
          </a>
          <a href="#reviews"
            onClick={toggleNav}>
            <li className="px-5 border-b-2 py-2.5 w-full text-center">
              Reviews
            </li>
          </a>
          <a href="#info"
            onClick={toggleNav}>
            <li className="px-5 border-b-2 py-2.5 w-full text-center">Info</li>
          </a>
          <a href="#contact"
            onClick={toggleNav}>
            <li className="px-5 border-b-2 py-2.5 w-full text-center">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
