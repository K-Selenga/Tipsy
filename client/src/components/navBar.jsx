import React from "react";
import Logo from "../Assets/LogoW.png";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { RiUserHeartLine } from "react-icons/ri";
import { ImLab } from "react-icons/im";

function NavBar() {
  //   const [show, handleShow] = useState(false);

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
      <Link to="/">
        <img src={Logo} alt="White Logo Tipsy" className="nav__logo" />
      </Link>

      <div className="banner__contents--btns">
        <Link to="/addSignature">
          <ImLab className="nav__searchicon" />
        </Link>
        <Link to="/favlist">
          <RiUserHeartLine className="nav__searchicon" />
        </Link>
      </div>
      <Link className="nav__search" to="/search">
        <RiSearchLine className="nav__searchicon" />
        Search
      </Link>
    </div>
  );
}

export default NavBar;
