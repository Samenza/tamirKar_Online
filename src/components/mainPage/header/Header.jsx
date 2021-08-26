import React from "react";
import NavBar from "./navBar/NavBar";
import "./header.scss";
const Header = () => {
  return (
    <React.Fragment>
      <NavBar />
      <header>
        <div className="quickRequest"></div>
      </header>
      <hr />
    </React.Fragment>
  );
};

export default Header;
