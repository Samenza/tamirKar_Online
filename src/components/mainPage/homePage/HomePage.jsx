import "./homePage.scss";
import React from "react";
import HeadOfContent from "./headOfContent/HeadOfContent";
import MiddleOfContent from "./midleOfContent/MiddleOfContent";

const HomePage = () => {
  return (
    <div className="content">
      <HeadOfContent />
      <MiddleOfContent />
    </div>
  );
};

export default HomePage;
