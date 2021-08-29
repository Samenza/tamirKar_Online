import React from "react";

import "./header.scss";
import QuickRequest from "./quickRequest/QuickRequest";
const Header = () => {
  return (
    <React.Fragment>
      <header>
        <QuickRequest />
      </header>
      <hr />
      <div className="emptySpace"></div>
    </React.Fragment>
  );
};

export default Header;
