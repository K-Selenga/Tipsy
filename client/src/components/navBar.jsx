import React from "react";
import Logo from "../Assets/LogoW.png";

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
      <img src={Logo} alt="White Logo Tipsy" className="nav__logo" />
    </div>
  );
}

export default NavBar;
