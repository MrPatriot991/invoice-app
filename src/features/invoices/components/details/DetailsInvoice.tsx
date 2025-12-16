import { BillFormSection } from "./sections/BillFormSection";
import { BillToSection } from "./sections/BillToSection";
import { ItemsInfo } from "./sections/ItemsInfo";

import type { Invoice } from "@/features/invoices/types";

interface DetailsInvoiceProps {
  invoice: Invoice;
}

const DetailsInvoice = ({ invoice }: DetailsInvoiceProps) => {
  const {
    id,
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    items,
    total,
  } = invoice;

  return (
    <div className="mb-14 flex-1 rounded-lg bg-container p-6 shadow-sm transition-colors duration-300 sm:mb-0 sm:p-8 lg:p-12">
      <BillFormSection
        id={id}
        description={description}
        senderAddress={senderAddress}
      />
      <BillToSection
        createdAt={createdAt}
        clientName={clientName}
        paymentDue={paymentDue}
        clientAddress={clientAddress}
        clientEmail={clientEmail}
      />
      <ItemsInfo items={items} total={total} />
    </div>
  );
};

export default DetailsInvoice;
