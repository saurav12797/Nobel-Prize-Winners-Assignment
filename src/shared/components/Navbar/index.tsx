import React from "react";
import { Card } from "../../../views/components/Card";
import "./navbar.scss";
import nobelPrizeLogo from "../../../assets/Nobel_Prize.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={nobelPrizeLogo} alt="nobel price logo" />
        </div>
        <div className="navbar__content-text">
          <h1> Nobel Prize Winners</h1>
        </div>
      </nav>
    </>
  );
};
