import React from "react";
import Members from "./Members";
import Administrators from "./Administrators";
import "./common.css";

const Body = () => {
  return (
    <div className="body">
      <Administrators />
      <Members />
    </div>
  );
};

export default Body;
