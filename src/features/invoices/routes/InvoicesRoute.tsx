import {
  InvoiceHeader,
  InvoiceList,
} from "@/features/invoices/components/lists";

import { invoices } from "@/features/invoices/lib/utils/mockData";

const InvoicesRoute = () => {
  return (
    <div className="container mx-auto py-8 md:py-14 lg:py-20">
      <InvoiceHeader />
      <InvoiceList invoices={invoices} />
    </div>
  );
};

export default InvoicesRoute;
