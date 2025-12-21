import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { invoiceSchema, type InvoiceFormType } from "../schema";

export function useInvoiceForm(defaultValue?: Partial<InvoiceFormType>) {
  return useForm<InvoiceFormType>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: defaultValue || {
      billForm: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      billTo: {
        clientName: "",
        clientEmail: "",
        streetAddress: "",
        city: "",
        postCode: "",
        country: "",
      },
      paymentInfo: {
        invoiceDate: "",
        paymentTerm: "",
        projectDescription: "",
      },
      items: [
        {
          name: "",
          qty: 1,
          price: 0,
          total: 0,
        },
      ],
    },
  });
}
