import { InvoiceCard } from "@/features/invoices/components/lists";
import { MainLayout } from "../components/layout";

function App() {
  return (
    <MainLayout>
      <div className="container mx-auto mt-10">
        <InvoiceCard />
      </div>
    </MainLayout>
  );
}

export default App;
