import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function layout({ children }) {
  return (
    <div>
      <div className="sm:w-64 sm:block fixed">
        <SideNav></SideNav>
      </div>

      <div className="ml-64">
        <Header></Header>
        {children}
      </div>
    </div>
  );
}

export default layout;
