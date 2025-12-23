import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { invoiceSchema, type InvoiceFormType } from "../schema";
import type { Invoice } from "@/features/invoices/types";

export function useInvoiceForm(invoiceDate?: Invoice) {
  const defaultValues = invoiceDate
    ? {
        ...invoiceDate,
        createdAt: new Date(invoiceDate.createdAt),
        paymentDue: new Date(invoiceDate.paymentDue),
        items: invoiceDate.items.map((item) => ({
          ...item,
        })),
      }
    : {
        createdAt: new Date(),
        paymentDue: new Date(),
        description: "",
        paymentTerms: 30,
        clientName: "",
        clientEmail: "",
        senderAddress: { street: "", city: "", postCode: "", country: "" },
        clientAddress: { street: "", city: "", postCode: "", country: "" },
        items: [{ name: "", quantity: 1, price: 0, total: 0 }],
      };

  return useForm<InvoiceFormType>({
    resolver: zodResolver(invoiceSchema),
    defaultValues,
  });
}
