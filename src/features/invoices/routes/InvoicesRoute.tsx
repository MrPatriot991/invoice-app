import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  fetchInvoices,
  selectFilterInvoices,
  selectStatus,
} from "@/features/invoices/store";

import {
  InvoiceHeader,
  InvoiceList,
  InvoiceEmpty,
} from "@/features/invoices/components/lists";
import { Spinner } from "@/components/common/spinner";

const InvoicesRoute = () => {
  const dispatch = useAppDispatch();
  const activeFilters = useAppSelector(selectFilterInvoices);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchInvoices());

    // eslint-disable-next-line
  }, []);

  const showSpinner = status === "loading" && activeFilters.length === 0;
  const showList = activeFilters.length > 0 && status !== "error";
  const showEmpty = status === "success" && activeFilters.length === 0;

  return (
    <div className="container mx-auto py-8 md:py-14 lg:py-20">
      <InvoiceHeader />
      {showSpinner && <Spinner />}

      {showList && <InvoiceList />}

      {showEmpty && (
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-8 sm:min-h-[50vh] lg:sm:min-h-[60vh]">
          <InvoiceEmpty />
        </div>
      )}
    </div>
  );
};

export default InvoicesRoute;
