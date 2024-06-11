import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-800 h-20 flex items-center relative">
        <div className="navbar-start px-4 flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Company Logo"
            className="h-16"
          />
        </div>

        <Link to="/">
          <button className="btn btn-sm text-white sm:btn-sm md:btn-md lg:btn-lg border-none hover:bg-transparent bg-transparent">
            Home
          </button>
        </Link>

        <div className="dropdown dropdown-hover bg-transparent">
          <Link to="/about">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm text-lg m-1 bg-transparent hover:bg-transparent border-none text-white"
            >
              About
            </div>
          </Link>
        </div>

        <div className="dropdown dropdown-hover bg-transparent">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm text-lg m-1 bg-transparent hover:bg-transparent border-none text-white"
          >
            Results
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/results/item1" className="font-bold">CBSE Board</Link>
            </li>
            <li>
              <Link to="/results/item2" className="font-bold">MP Board</Link>
            </li>
          </ul>
        </div>

        <Link to="/gallery">
          <button className="btn btn-sm text-white sm:btn-sm md:btn-md lg:btn-lg border-none hover:bg-transparent bg-transparent">
            Gallery
          </button>
        </Link>

        <Link to="/courses">
          <button className="btn btn-sm text-white sm:btn-sm md:btn-md lg:btn-lg border-none hover:bg-transparent bg-transparent">
            Our Courses
          </button>
        </Link>

        <Link to="/contact">
          <button className="btn btn-sm text-white sm:btn-sm md:btn-md lg:btn-lg border-none hover:bg-transparent bg-transparent">
            Contact
          </button>
        </Link>

        <div className="navbar-end flex-grow flex justify-end px-4 ">
          {/* Add other navbar items here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
