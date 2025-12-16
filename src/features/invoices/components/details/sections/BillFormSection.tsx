import type { Address } from "@/features/invoices/types";

interface BillFormProps {
  id: string;
  description: string;
  senderAddress: Address;
}

export const BillFormSection = ({
  id,
  description,
  senderAddress,
}: BillFormProps) => {
  return (
    <div className="mb-8 flex flex-col items-start gap-7 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1 sm:gap-2">
        <h3 className="heading-s-variant text-primary transition-colors duration-300">
          <span className="text-[var(--color-gray-500)]">#</span>
          {id}
        </h3>
        <p className="body text-secondary transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="body flex flex-col items-start text-secondary transition-colors duration-300 sm:items-end sm:gap-1">
        <p>{senderAddress.street}</p>
        <p>{senderAddress.city}</p>
        <p>{senderAddress.postCode}</p>
        <p>{senderAddress.country}</p>
      </div>
    </div>
  );
};
