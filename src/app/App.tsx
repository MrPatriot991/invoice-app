import { MainLayout } from "@/components/layout";
import {
  InvoiceHeader,
  InvoiceCard,
} from "@/features/invoices/components/lists";

function App() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 md:py-14 lg:py-20">
        <InvoiceHeader />
        <InvoiceCard />
      </div>
    </MainLayout>
  );
}

export default App;
