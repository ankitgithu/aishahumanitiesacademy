import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-800 h-20 flex items-center justify-between px-4">
        <div className="navbar-start flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Company Logo"
            className="h-12 md:h-16"
          />
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/">
            <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent">
              Home
            </button>
          </Link>

          <Link to="/about">
            <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent">
              About
            </button>
          </Link>

          <div className="dropdown dropdown-hover bg-transparent">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent"
            >
              Results
            </button>
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
            <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent">
              Gallery
            </button>
          </Link>

          <Link to="/courses">
            <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent">
              Our Courses
            </button>
          </Link>

          <Link to="/contact">
            <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent">
              Contact
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent"
            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="hidden md:hidden bg-blue-800 px-4 py-2">
        <Link to="/">
          <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent w-full text-left">
            Home
          </button>
        </Link>

        <Link to="/about">
          <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent w-full text-left">
            About
          </button>
        </Link>

        <div className="dropdown dropdown-hover bg-transparent w-full">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent w-full text-left"
          >
            Results
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
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
          <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent w-full text-left">
            Gallery
          </button>
        </Link>

        <Link to="/courses">
          <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent w-full text-left">
            Our Courses
          </button>
        </Link>

        <Link to="/contact">
          <button className="btn btn-sm text-white border-none hover:bg-transparent bg-transparent w-full text-left">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
