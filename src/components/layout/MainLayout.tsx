import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-dvh flex-col bg-main transition-colors duration-300 lg:flex-row">
      <Sidebar />

      <main className="flex-1 overflow-y-auto scroll-smooth px-6 sm:px-8 md:px-12 lg:px-20">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
