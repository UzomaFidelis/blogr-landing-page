import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideMenuClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideMenuClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideMenuClick);
    };
  }, [isOpen]);

  return (
    <header className="bg-lightRed px-6 py-14 overflow-hidden rounded-bl-[6.3rem] lg:px-[9rem] 2xl:px-[10.5rem]  lg:pb-12">
      <div className="flex flex-row justify-between items-center lg:justify-normal lg:gap-24">
        <img
          src="./src/assets/images/logo.svg"
          alt="blogr logo"
          className="w-20 lg:w-24 lg:basis-24"
        />
        <div ref={menuRef} className="lg:flex-1">
          {isOpen ? (
            <img
              src="./src/assets/images/icon-close.svg"
              alt=""
              className="h-6 pr-[0.4rem] cursor-pointer lg:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <img
              src="./src/assets/images/icon-hamburger.svg"
              alt=""
              className="h-5 cursor-pointer lg:hidden"
              onClick={toggleMenu}
            />
          )}
          <Menu open={isOpen} />
        </div>
      </div>
      <div className="text-white pt-[7rem] pb-[6.4rem] px-4 font-overpass lg:pt-[9rem]">
        <h1 className="text-[2.25rem]/[2.8rem] tracking-[-0.04em]  font-semibold lg:text-[4rem]/[4.5rem] 2xl:text-[4rem]/[2.8rem]">
          A modern publishing platform
        </h1>
        <p className="text-lg/[1.43rem] py-[1rem] lg:text-2xl lg:py-[1.4rem]">
          Grow your audience and build your online brand
        </p>
        <div className="flex justify-center mt-7 px-1 gap-6">
          <button
            type="button"
            className="bg-white p-2 text-lightRed rounded-3xl w-[8.5rem] font-bold font-ubuntu border-white border-2 h-[3rem] hover:bg-lightRed hover:text-white"
          >
            Start for Free
          </button>
          <button
            type="button"
            className="text-white rounded-3xl w-[8.5rem] font-bold font-ubuntu border-white border-2 h-[3rem] hover:text-lightRed hover:bg-white"
          >
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Heading;
