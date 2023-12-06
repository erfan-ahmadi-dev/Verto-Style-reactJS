import React from "react";
import DashBoardSideBar from "../SideBar/DashBoardSideBar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="flex font-IranRegular">
      <DashBoardSideBar />
      <Outlet />
    </div>
  );
}

export default Admin;
