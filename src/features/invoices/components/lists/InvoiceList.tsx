import type { Invoice } from "../../types";
import InvoiceCard from "./InvoiceCard";

interface InvoiceListProps {
  invoices: Invoice[];
}

const InvoiceList = ({ invoices }: InvoiceListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {invoices &&
        invoices.map((invoice) => (
          <li key={invoice.id}>
            <InvoiceCard invoice={invoice} />
          </li>
        ))}
    </ul>
  );
};

export default InvoiceList;
