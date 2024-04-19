import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Menu = ({ open }) => {
  const [connectMenuOpen, setConnectMenuOpen] = useState(false);

  const toggleConnectMenu = () => {
    setConnectMenuOpen(!connectMenuOpen);
  };
  const openMenuAnimation = useSpring({
    from: { maxHeight: "32px" },
    to: { maxHeight: connectMenuOpen ? "222px" : "32px" },
    config: { duration: "300" },
  });

  const arrowIconAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: connectMenuOpen ? "rotate(180deg)" : "rotate(0deg)" },
    config: { duration: "120" },
  });

  return (
    <div
      className={`${
        !open && "hidden"
      } absolute bg-white text-center w-[20.2rem] top-[7.8rem] inset-x-2/4 -translate-x-2/4 font-overpass font-semibold pt-[1.3rem] pb-[0.9rem] shadow-[0_5px_25px_-1px] shadow-grayishBlue rounded-lg lg:flex lg:static lg:translate-x-0 lg:w-full lg:py-0 lg:shadow-none lg:justify-between lg:bg-transparent`}
    >
      <nav className="lg:relative lg:top-2">
        <ul className="lg:flex lg:gap-10">
          <li className="py-[0.7rem] lg:inline">
            <a href="" className=" text-lg lg:text-white lg:hover:underline">
              Product
            </a>
          </li>
          <li className="py-[0.7rem] lg:inline">
            <a href="" className=" text-lg lg:text-white lg:hover:underline">
              Company
            </a>
          </li>
          <animated.li
            className="group/connect py-[0.7rem] flex flex-col items-center overflow-hidden lg:inline lg:relative lg:overflow-visible"
            style={openMenuAnimation}
          >
            <div className="ml-[1.2rem] lg:ml-0">
              <a href="" className="text-lg lg:text-white lg:hover:underline">
                Connect
              </a>
              <animated.img
                src="./src/assets/images/icon-arrow-dark.svg"
                className="inline ml-2 cursor-pointer transition-transform lg:hidden"
                onClick={toggleConnectMenu}
                style={arrowIconAnimation}
              />
            </div>

            <span className="py-4 block mt-5 bg-grayishBlue/[0.3] w-[85%] rounded lg:hidden lg:absolute lg:bg-white lg:top-4 lg:left-[-2rem] lg:w-[250%] lg:shadow-[0_5px_25px_-3px] lg:shadow-grayishBlue lg:group-hover/connect:block">
              <a href="" className="block py-2 ">
                Contact
              </a>
              <a href="" className="block py-2 ">
                Newsletter
              </a>
              <a href="" className="block py-2 ">
                LinkedIn
              </a>
            </span>
          </animated.li>
        </ul>
      </nav>
      <hr className="w-[85%] mx-auto my-[0.7rem] lg:hidden" />
      <div className="flex flex-col py-5 items-center lg:flex-row lg:py-0 lg:gap-4 lg:relative lg:top-2">
        <a href="" className="lg:text-white hover:underline">
          Login
        </a>
        <button
          type="button"
          className="mt-5  w-[8.5rem] bg-lightRed text-white p-3 rounded-full border-2 border-grayishBlue/[0.4] lg:mt-0 lg:bg-white lg:text-lightRed lg:hover:bg-white/[0.2] lg:hover:text-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Menu;
