import {
  InvoiceHeader,
  InvoiceList,
} from "@/features/invoices/components/lists";

import { invoices } from "@/features/invoices/lib/utils/mockData";
import { useState } from "react";

import type { InvoiceStatus } from "../types";

const InvoicesRoute = () => {
  const [filter, setFilter] = useState<InvoiceStatus | "All">("All");

  const invoiceFiltered = invoices.filter(
    (invoice) => filter === "All" || invoice.status === filter,
  );

  return (
    <div className="container mx-auto py-8 md:py-14 lg:py-20">
      <InvoiceHeader filter={filter} setFilter={setFilter} />
      <InvoiceList invoices={invoiceFiltered} />
    </div>
  );
};

export default InvoicesRoute;
