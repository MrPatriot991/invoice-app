import clsx from "clsx";
import { ChevronDown } from "lucide-react";

import { StatusBadge } from "@/components/common/statusBadge";
import type { Invoice } from "@/features/invoices/types";

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  const { id, paymentDue, clientName, total, status } = invoice;

  const cardClass = clsx(
    // layout
    "group grid items-center gap-4 sm:gap-8 rounded-lg p-6 lg:gap-11",

    // grid
    "grid-cols-2 [grid-template-areas:'id_client'_'due_status'_'total_status']",
    "md:grid-cols-[auto_auto_1fr_auto_auto]",
    "md:[grid-template-areas:'id_due_client_total_status']",

    // colors
    "bg-container shadow-sm",

    // interaction
    "cursor-pointer transition duration-300",
    "hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl",

    // focus (keyboard)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple",
  );

  return (
    <article className={cardClass}>
      <h3 className="heading-s-variant text-primary transition-colors duration-300 [grid-area:id]">
        <span className="text-[var(--color-gray-500)]">#</span>
        {id}
      </h3>
      <p className="body col-start-1 text-secondary transition-colors duration-300 [grid-area:due]">
        {paymentDue}
      </p>
      <p className="body justify-self-end text-secondary transition-colors duration-300 [grid-area:client] md:justify-self-start">
        {clientName}
      </p>
      <p className="heading-s text-primary transition-colors duration-300 [grid-area:total]">
        £ {total}
      </p>
      <div className="grid grid-cols-1 items-center gap-6 justify-self-end [grid-area:status] md:grid-cols-[3fr_auto] md:justify-self-start">
        <StatusBadge status={status} />
        <div className="hidden md:inline-block">
          <ChevronDown className="h-5 w-5 -rotate-90 text-purple" />
        </div>
      </div>
    </article>
  );
};

export default InvoiceCard;
