import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchInvoices } from "@/features/invoices/store";
import { selectFilterInvoices } from "../store/invoice.selector";

import {
  InvoiceHeader,
  InvoiceList,
  InvoiceEmpty,
} from "@/features/invoices/components/lists";

const InvoicesRoute = () => {
  const dispatch = useAppDispatch();
  const aciveFilters = useAppSelector(selectFilterInvoices);

  useEffect(() => {
    dispatch(fetchInvoices());

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto py-8 md:py-14 lg:py-20">
      <InvoiceHeader />
      {aciveFilters.length > 0 ? (
        <InvoiceList invoices={aciveFilters} />
      ) : (
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-8 sm:min-h-[50vh] lg:sm:min-h-[60vh]">
          <InvoiceEmpty />
        </div>
      )}
    </div>
  );
};

export default InvoicesRoute;
