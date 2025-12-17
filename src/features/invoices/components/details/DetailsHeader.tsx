import React from "react";
import { StatusBadge } from "@/components/common/statusBadge";
import { Button } from "@/components/ui/Button";

import type { InvoiceStatus } from "@/features/invoices/types";
import type { ActionButton } from "@/features/invoices/routes/InvoiceDetailsRoute";

interface DetailsHeaderProps {
  status: InvoiceStatus;
  buttons: ActionButton[];
}

const DetailsHeader = React.memo(({ status, buttons }: DetailsHeaderProps) => {
  return (
    <div className="mb-4 flex justify-between rounded-lg bg-container p-6 shadow-sm transition-colors duration-300 sm:mb-6 sm:p-8">
      <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-start">
        <p className="text-secondary transition-colors duration-300">Status</p>
        <StatusBadge status={status} />
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        {buttons.map(({ text, variant, onClick }) => (
          <Button key={text} variant={variant} onClick={onClick}>
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
});

export default DetailsHeader;
