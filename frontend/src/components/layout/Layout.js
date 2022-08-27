import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="h-screen border-gray-200 px-4 lg:px-48 py-12 dark:bg-gray-800 bg-[#e7e8ec]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
