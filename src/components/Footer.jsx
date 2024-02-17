import React from "react";

function Footer({ theme }) {
  return (
    <div
      className={`flex flex-col xl:flex-row items-center shadow-md rounded-2xl justify-between border-t-4 md:border-t-10 md:py-6 px-6 `}>
      <h4 className="font-bold">Shaun Niel Ochavo</h4>
      <div className="flex gap-x-3">
        <a
          href="https://www.linkedin.com/in/shaun-niel-ochavo-97915a232/"
          target="_blank">
          <div className="hover:bg-gray-400 cursor-pointer p-1 rounded-md flex items-center duration-500">
            <ion-icon name="logo-linkedin" size="small"></ion-icon>
          </div>
        </a>
        <a href="https://github.com/shaunniekins" target="_blank">
          <div className="hover:bg-gray-400 cursor-pointer p-1 rounded-md flex items-center duration-500">
            <ion-icon name="logo-github" size="small"></ion-icon>
          </div>
        </a>
        <a href="https://www.facebook.com/shaunniel.ochavo" target="_blank">
          <div className="hover:bg-gray-400 cursor-pointer p-1 rounded-md flex items-center duration-500">
            <ion-icon name="logo-facebook" size="small"></ion-icon>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
