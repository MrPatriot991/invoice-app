import type { Address } from "@/features/invoices/types";

interface BillToProps {
  createdAt: string;
  paymentDue: string;
  clientName: string;
  clientAddress: Address;
  clientEmail: string;
}

export const BillToSection = ({
  createdAt,
  paymentDue,
  clientName,
  clientAddress,
  clientEmail,
}: BillToProps) => {
  return (
    <div className="mb-8 grid grid-cols-2 sm:grid-cols-[1fr_1fr_2fr] md:mb-12 lg:mb-9">
      <div className="flex flex-col justify-start gap-8 sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="body text-secondary transition duration-300">
            Invoice Date
          </p>
          <strong className="heading-s-variant text-primary transition duration-300">
            {createdAt}
          </strong>
        </div>
        <div className="flex flex-col gap-3">
          <p className="body text-secondary transition duration-300">
            Payment Due
          </p>
          <strong className="heading-s-variant text-primary transition duration-300">
            {paymentDue}
          </strong>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <p className="body text-secondary transition duration-300">Bill To</p>
          <strong className="heading-s-variant text-primary transition duration-300">
            {clientName}
          </strong>
        </div>
        <div className="body flex flex-col text-secondary transition duration-300 sm:gap-1">
          <p>{clientAddress.street}</p>
          <p>{clientAddress.city}</p>
          <p>{clientAddress.postCode}</p>
          <p>{clientAddress.country}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="body text-secondary transition duration-300">Sent to</p>
        <strong className="heading-s-variant text-primary transition duration-300">
          {clientEmail}
        </strong>
      </div>
    </div>
  );
};
