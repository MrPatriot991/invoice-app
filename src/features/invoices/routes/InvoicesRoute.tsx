import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchInvoices } from "@/features/invoices/store";

import {
  InvoiceHeader,
  InvoiceList,
  InvoiceEmpty,
} from "@/features/invoices/components/lists";

import type { RootState } from "@/app/store";
import type { InvoiceStatus } from "../types";

const InvoicesRoute = () => {
  const [filter, setFilter] = useState<InvoiceStatus | "All">("All");
  const dispatch = useAppDispatch();
  const selectAllInvoices = useAppSelector(
    (state: RootState) => state.invoices.invoices,
  );

  useEffect(() => {
    dispatch(fetchInvoices());

    // eslint-disable-next-line
  }, []);

  const invoiceFiltered = selectAllInvoices.filter(
    (invoice) => filter === "All" || invoice.status === filter,
  );

  return (
    <div className="container mx-auto py-8 md:py-14 lg:py-20">
      <InvoiceHeader filter={filter} setFilter={setFilter} />
      {invoiceFiltered.length > 0 ? (
        <InvoiceList invoices={invoiceFiltered} />
      ) : (
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-8 sm:min-h-[50vh] lg:sm:min-h-[60vh]">
          <InvoiceEmpty />
        </div>
      )}
    </div>
  );
};

export default InvoicesRoute;
