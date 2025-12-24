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
import { ErrorBoundary } from "@/components/common/errorBoundary";
import { ErrorDisplay } from "@/components/ui/errorDisplay";

const InvoicesRoute = () => {
  const dispatch = useAppDispatch();
  const activeFilters = useAppSelector(selectFilterInvoices);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchInvoices());

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto py-8 md:py-14 lg:py-20">
      <InvoiceHeader />

      {status === "loading" && activeFilters.length === 0 && <Spinner />}

      <ErrorBoundary>
        {activeFilters.length > 0 && status !== "error" && <InvoiceList />}
      </ErrorBoundary>

      {status === "success" && activeFilters.length === 0 && (
        <div className="flex min-h-[60vh] items-center justify-center px-4 py-8 sm:min-h-[50vh] lg:sm:min-h-[60vh]">
          <InvoiceEmpty />
        </div>
      )}

      {status === "error" && <ErrorDisplay />}
    </div>
  );
};

export default InvoicesRoute;
