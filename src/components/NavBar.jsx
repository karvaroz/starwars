import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-3xl text-amber-400">STAR WARS</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-neutral-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-amber-400 text-slate-100">
            List Data
          </Link>
          <Link to="/search" className="mr-5 hover:text-amber-400 text-slate-100">
            Search Data
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
