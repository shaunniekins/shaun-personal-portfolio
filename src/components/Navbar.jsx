import { useState } from "react";
import React from "react";
import Contact from "./Contact";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const links = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // {name: 'Contact', link: '/'},
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowCloseIcon(!showCloseIcon);
  };

  return (
    <div className=" flex justify-center sticky top-0 z-40 rounded-b-3xl shadow-md dark:bg-gray-900 backdrop-filter backdrop-blur">
      <div className="mx-12 md:mx-[10rem] xl:mx-[20rem] w-10/12 max-w-screen-xl flex items-center ">
        <div className="container mx-auto px-10 py-6">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-sm lg:text-2xl text-gray-800 hover:text-gray-400 duration-500">
              <a href="#intro">Shaun Niel Ochavo</a>
            </h1>
            <div className="lg:hidden">
              {/* Menu Icon */}
              <button
                type="button"
                className="text-gray-800 hover:text-gray-400 duration-500"
                onClick={toggleMenu}>
                {showCloseIcon ? (
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ul className="hidden lg:flex items-center space-x-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500">
                    {link.name}
                  </a>
                </li>
              ))}
              <li
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                onClick={() => setShowModal(true)}>
                Contact
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1vrfQt_FnG3P6B1Yo_Bou5ivNvKr6jiel?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-400 duration-500 flex items-center space-x-1">
                  Resume
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <desc></desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                    <line x1="10" y1="14" x2="20" y2="4"></line>
                    <polyline points="15 4 20 4 20 9"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 flex flex-col items-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500 mb-4">
                  {link.name}
                </a>
              ))}
              <p
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer mb-4"
                onClick={() => setShowModal(true)}>
                Contact
              </p>
              <a
                href="https://drive.google.com/drive/folders/1vrfQt_FnG3P6B1Yo_Bou5ivNvKr6jiel?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-400 duration-500 flex items-center space-x-1">
                Resume
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <desc></desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                  <line x1="10" y1="14" x2="20" y2="4"></line>
                  <polyline points="15 4 20 4 20 9"></polyline>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      <Contact showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Navbar;
