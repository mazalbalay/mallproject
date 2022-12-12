import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
//   const Links = [
//     { name: "צור קשר", link: "/contact-us" },
//     { name: "תנאי שימוש", link: "/terms-of-use" },
//     { name: "איכות הסביבה", link: "/environmental-quality" },
//     { name: "הרשמה", link: "/registration" },
//     { name: "כניסת משתמש", link: "/user-login" },
//   ];
  return (
    <nav className="flex flex-5 justify-between px-5">
      <div>LOGO</div>

      <ul className="flex flex-5">
        <li>
          <Link to="/contact-us">צור קשר</Link>
        </li>
        <li>
          <Link to="/terms-of-use">תנאי שימוש</Link>
        </li>
        <li>
          <Link to="/environmental-quality">איכות הסביבה</Link>
        </li>
        <li>
          <Link to="/registration">הרשמה</Link>
        </li>
        <li>
          <Link to="/user-login">כניסת משתמש</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
