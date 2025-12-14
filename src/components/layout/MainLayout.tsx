import Sidebar from "./Sidebar";

interface MainProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainProps) => {
  return (
    <div className="flex flex-col lg:flex-row h-dvh">
      <Sidebar />

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
