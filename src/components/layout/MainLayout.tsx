import Sidebar from "./Sidebar";

interface MainProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainProps) => {
  return (
    <div className="flex h-dvh flex-col lg:flex-row">
      <Sidebar />

      <main className="flex-1 overflow-auto px-6 sm:px-12 lg:px-20">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
