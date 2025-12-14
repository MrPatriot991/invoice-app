import { ChevronDown, Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";

const InvoiceHeader = () => {
  return (
    <header className="mb-8 flex items-center justify-between sm:mb-14">
      <div className="flex flex-col gap-1">
        <h1 className="heading-m md:heading-l text-primary transition-colors duration-300">
          Invoices
        </h1>
        <p className="body-variant text-tertiary hidden transition-colors duration-300 md:block">
          There are<span> 7 </span>total invoices
        </p>
        <p className="body-variant text-tertiary transition-colors duration-300 md:hidden">
          <span> 7 </span> invoices
        </p>
      </div>
      <div className="flex items-center gap-4 md:gap-10">
        <button className="flex items-center gap-1 sm:gap-3 lg:gap-3">
          <span className="heading-s-variant text-primary inline-block">
            Filter <span className="hidden sm:inline-block"> by status</span>
          </span>
          <ChevronDown className="h-4 w-4 text-purple md:h-5 md:w-5" />
        </button>
        <Button variant="purple">
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
