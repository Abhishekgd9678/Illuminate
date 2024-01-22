import React, { useState } from "react";
import logonie from "../images/logo.png";
import lt from '../images/lt.svg'
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex flex-row md:flex-row justify-around m-4 ">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <div className="">
            <img className="w-[50px]" src={logonie} alt="Logo" />
          </div>
          <div className="hidden md:block ">
            <h4 className="ml-2 font-bold text-xl">The National Institute of Engineering</h4>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <img className="h-[50px] md:w-auto w-14 object-cover object-left" src={lt} alt="Logo" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end m-4">
        <button
          onClick={toggleMobileMenu}
          className="text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center">
          <Link to="" onClick={toggleMobileMenu}><li>Why Attend?</li></Link>
          <Link to="/about" onClick={toggleMobileMenu}><li>Who are We?</li></Link>
          <Link to="/speaker" onClick={toggleMobileMenu}><li>Speakers </li></Link>
          <Link to="/schedule" onClick={toggleMobileMenu}><li>Schedule </li></Link>
          <Link to="/register" onClick={toggleMobileMenu}><li>Register</li></Link>
          <Link to="/gallery" onClick={toggleMobileMenu}><li>Gallery</li></Link>
          <Link to="/articles" onClick={toggleMobileMenu}><li>In the News</li></Link>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center w-full">
        <ul className="flex flex-row font-medium w-10/12 md:w-full md:justify-around md:text-2xl ">
          <Link to=""><li>Why Attend?</li></Link>
          <Link to="/about"><li>Who are We?</li></Link>
          <Link to="/speaker"><li>Speakers </li></Link>
          <Link to="/schedule"><li>Schedule </li></Link>
          <Link to="/register"><li>Register</li></Link>
          <Link to="/gallery"><li>Gallery</li></Link>
          <Link to="/articles"><li>In the News</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
