import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { invoiceSchema, type InvoiceFormType } from "../schema";

export function useInvoiceForm(defaultValue?: Partial<InvoiceFormType>) {
  return useForm<InvoiceFormType>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: defaultValue || {
      createdAt: new Date(),
      paymentDue: new Date(),
      description: "",
      paymentTerms: 30,
      clientName: "",
      clientEmail: "",
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          name: "",
          quantity: 1,
          price: 0,
          total: 0,
        },
      ],
    },
  });
}
