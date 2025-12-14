import { MainLayout } from "@/components/layout";
import { InvoicesRoute } from "@/features/invoices/routes";

function App() {
  return (
    <MainLayout>
      <InvoicesRoute />
    </MainLayout>
  );
}

export default App;
