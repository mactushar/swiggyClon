import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AdminNav />
        <div className="flex flex-1">
          <AdminSideBar />

          <main className="flex-1 p-4 ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
