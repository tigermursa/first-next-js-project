import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {" "}
          <div>A Sidebar</div>
          {children}
    </div>
  );
};

export default DashboardLayout;
