import { Plus } from "lucide-react";

import { selectAllInvoices } from "@/features/invoices/store/invoice.selector";
import { useAppSelector } from "@/app/hooks";

import { useModal } from "@/provider/modal/useModal";
import { InvoiceForm } from "@/features/invoices/components/form";
import { Button } from "@/components/ui/button";
import { InvoiceFilters } from "@/features/invoices/components/filters";

const InvoiceHeader = () => {
  const invoiceLength = useAppSelector(selectAllInvoices).length;
  const { openModal } = useModal();

  const handleCreateInvoice = () => {
    openModal(<InvoiceForm />, "left");
  };

  return (
    <header className="mb-8 flex items-center justify-between sm:mb-14">
      <div className="flex flex-col gap-1">
        <h1 className="heading-m md:heading-l text-primary transition-colors duration-300">
          Invoices
        </h1>
        <p className="body-variant hidden text-tertiary transition-colors duration-300 md:block">
          There are<span> {invoiceLength} </span>total invoices
        </p>
        <p className="body-variant text-tertiary transition-colors duration-300 md:hidden">
          <span> {invoiceLength} </span> invoices
        </p>
      </div>
      <div className="flex items-center gap-4 lg:gap-10">
        <InvoiceFilters />
        <Button variant="purple" type="button" onClick={handleCreateInvoice}>
          <div className="rounded-full bg-white p-2">
            <Plus className="h-4 w-4 text-purple sm:h-6 sm:w-6" />
          </div>
          <span>
            New <span className="hidden sm:inline-block">Invoice</span>
          </span>
        </Button>
      </div>
    </header>
  );
};

export default InvoiceHeader;
