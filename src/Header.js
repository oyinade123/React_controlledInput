import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = ({ title, width }) => {
  return (
    <header style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {width < 768 ? <FaMobileAlt/> : width< 992 ? <FaTabletAlt/>: <FaLaptop/>}
    </header>
  );
};

export default Header;
