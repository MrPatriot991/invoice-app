import {
  useForm,
  type UseFormProps,
  type DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { invoiceSchema, type InvoiceFormType } from "../schema";

const emptyDefaultValues: DefaultValues<InvoiceFormType> = {
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

export function useInvoiceForm(props?: UseFormProps<InvoiceFormType>) {
  return useForm<InvoiceFormType>({
    resolver: zodResolver(invoiceSchema),
    ...props,
    defaultValues: props?.defaultValues || emptyDefaultValues,
  });
}
