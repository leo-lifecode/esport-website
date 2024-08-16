import { useState } from "react";
import { NavLink } from "react-router-dom";
import image38 from "../../public/image 38.png";
const Navbar = () => {
  const navleft = ["Tournaments", "Our Team", "Our Sponsors"];
  const navright = ["About Us", "Shop", "Contact Us"];
  const [showNav, setShowNav] = useState(false);
  const HandleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav className="text-White bg-transparent absolute top-0 w-full left-0 right-0">
        <div
          className={`px-5 xl:px-12 py-6 flex lg:justify-around ${
            showNav ? " bg-gray-900" : ""
          } justify-between w-full items-center relative z-[100]`}
        >
          <ul
            className={`md:flex md:flex-row flex-col px-4 transition duration-150 ease items-center ${
              showNav ? "flex top-[100%] bg-gray-900" : "-top-[500%]"
            } font-semibold font-heading md:space-x-12 md:static absolute right-0 left-0 text-center -z-30`}
          >
            {navleft.map((item, index) => {
              return (
                <li
                  className="text-gray-200 text-[20px] hover:underline md:flex mb-[12px] mt-[12px] md:mb-0 md:mt-0"
                  key={index}
                >
                  <NavLink className="">{item}</NavLink>
                </li>
              );
            })}
            <div className="md:hidden text-[20px]">
              {navright.map((item, index) => {
                return (
                  <li
                    className="text-gray-200 text-[20px] hover:underline mb-[12px] mt-[12px] md:mb-0 md:mt-0"
                    key={index}
                  >
                    <NavLink className="">{item}</NavLink>
                  </li>
                );
              })}
            </div>
          </ul>
          <img
            src={image38}
            alt="logo"
            className="lg:w-[130px] lg:h-[100px] md:w-[78px] md:h-[60px] w-[52px] h-[40px]"
          />
          <ul className="hidden md:flex px-4 font-semibold font-heading space-x-12 text-[20px]">
            {navright.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className="text-gray-200 text-[20px] hover:underline">
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div>
            <button
              className="navbar-burger self-center mr-12 md:hidden w-[32px] h-[32px]"
              onClick={HandleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
