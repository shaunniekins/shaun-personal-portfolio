import { useState } from "react";
import React from "react";
import Contact from "./Contact";

const Navbar = ({
  setShowAllProjects,
  toggleTheme,
  theme,
  showModal,
  setShowModal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowCloseIcon(!showCloseIcon);
  };

  const handleViewAllClick = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");
    const offsetTop = document.querySelector(target)?.offsetTop || 0;

    setShowAllProjects(false);
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const links = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // {name: 'Contact', link: '/'},
  ];

  return (
    <div
      className={`flex justify-center sticky top-0 z-40 rounded-b-3xl   ${
        theme === "dark" ? "text-white" : "text-gray-800"
      } ${
        theme === "dark"
          ? "shadow-sm shadow-white"
          : "shadow-md dark:bg-gray-900"
      } backdrop-filter backdrop-blur`}>
      <div className="mx-10 md:mx-[10rem] xl:mx-[20rem] w-10/12 max-w-screen-xl flex items-center ">
        <div className="container mx-auto px-2 py-6">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-sm lg:text-2xl hover:text-gray-400 duration-500">
              <a href="#intro" onClick={(event) => handleViewAllClick(event)}>
                Shaun Niel Ochavo
              </a>
            </h1>
            <div className="lg:hidden flex items-center">
              {/* Menu Icon */}
              <button
                type="button"
                className="hover:text-gray-400 duration-500 ml-4"
                onClick={toggleMenu}>
                {showCloseIcon ? (
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    {/* Close Icon SVG */}
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
                    {/* Menu Icon SVG */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  </svg>
                )}
              </button>
              {/* Theme Changer Icon */}
              <div
                className="text-xl hover:text-gray-400 duration-500 ml-4 flex items-center"
                onClick={toggleTheme}>
                {theme === "light" ? (
                  <ion-icon name="moon-outline" className="mr-1"></ion-icon>
                ) : (
                  <ion-icon name="sunny-outline" className="mr-1"></ion-icon>
                )}
                {/* <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span> */}
              </div>
            </div>
            <ul className="hidden lg:flex items-center space-x-8 ">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="hover:text-gray-400 duration-500"
                    onClick={(event) => handleViewAllClick(event)}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li
                className="hover:text-gray-400 duration-500 cursor-pointer"
                onClick={() => setShowModal(true)}>
                Contact
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1vrfQt_FnG3P6B1Yo_Bou5ivNvKr6jiel?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 duration-500 flex items-center space-x-1">
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
              <li
                className="hover:text-gray-400 duration-500 flex items-center space-x-1 text-xl"
                onClick={toggleTheme}>
                {theme === "light" ? (
                  <ion-icon name="moon-outline"></ion-icon>
                ) : (
                  <ion-icon name="sunny-outline"></ion-icon>
                )}
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
                  className="hover:text-gray-400 duration-500 mb-4">
                  {link.name}
                </a>
              ))}
              <p
                className="hover:text-gray-400 duration-500 cursor-pointer mb-4"
                onClick={() => setShowModal(true)}>
                Contact
              </p>
              <a
                href="https://drive.google.com/drive/folders/1vrfQt_FnG3P6B1Yo_Bou5ivNvKr6jiel?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 duration-500 flex items-center space-x-1">
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
      {/* <Contact showModal={showModal} setShowModal={setShowModal} theme={theme} /> */}
    </div>
  );
};

export default Navbar;
