import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <nav>
        <h1>TechWeb</h1>
        <main>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <HashLink to={"/#about"}>About</HashLink>
          {/* // HashLink To avoid page change */}
          <HashLink to={"/#brands"}>Brands</HashLink>
          <Link to={"/services"}>Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
