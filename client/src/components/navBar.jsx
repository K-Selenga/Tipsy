import React, { useState, useEffect } from "react";
import Logo from "../Assets/LogoW.png";
import { GiBabyBottle } from "react-icons/gi";

function NavBar() {
  const [show, handleShow] = useState(false);

  // Scrolldown effect bar appears nah, i changed my mind
  //  useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 10) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  return (
    <div className="nav">
      <img src={Logo} alt="White Logo Tipsy" className="nav__logo" />
      <img src={GiBabyBottle} alt="" className="nav__baby" />
    </div>
  );
}

export default NavBar;
