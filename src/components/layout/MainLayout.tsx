import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Sidebar from "./Sidebar";

const MainLayout = () => {
  // Reference to the main container main
  const mainRef = useRef<HTMLElement>(null);
  // Get the current route path
  const location = useLocation();

  // Reset the scroll to the beginning when changing the path
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-dvh flex-col bg-main transition-colors duration-300 lg:flex-row">
      <Sidebar />

      <main
        ref={mainRef}
        className="flex-1 overflow-y-auto px-6 sm:px-8 md:px-12 lg:px-20"
      >
        <Outlet context={{ scrollContainerRef: mainRef }} />
      </main>
    </div>
  );
};

export default MainLayout;
