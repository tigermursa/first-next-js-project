import React from "react";

const getAllCatefories = async () => {
  const res = await fetch("");
  return res.json();
};

export default getAllCatefories;
