import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default WithLayout;
