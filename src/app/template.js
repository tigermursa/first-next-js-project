"use client";

import React, { Children } from "react";

const Template = ({ children }) => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return <div>{children}</div>;
};

export default Template;
