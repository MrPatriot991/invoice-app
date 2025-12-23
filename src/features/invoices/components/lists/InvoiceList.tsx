import { useAppSelector } from "@/app/hooks";
import { selectFilterInvoices } from "@/features/invoices/store";
import InvoiceCard from "./InvoiceCard";

const InvoiceList = () => {
  const invoicesFiltered = useAppSelector(selectFilterInvoices);

  return (
    <ul className="flex flex-col gap-4">
      {invoicesFiltered &&
        invoicesFiltered.map((invoice) => (
          <li key={invoice.id}>
            <InvoiceCard invoice={invoice} />
          </li>
        ))}
    </ul>
  );
};

export default InvoiceList;
