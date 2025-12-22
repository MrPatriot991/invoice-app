import { z } from "zod";

export const invoiceSchema = z.object({
  createdAt: z.date().min(1, "required"),
  paymentDue: z.date().min(1, "required"),
  description: z.string().min(1, "required"),
  paymentTerms: z.number().min(1, "required"),
  clientName: z.string().min(1, "required"),
  clientEmail: z.string().min(1, "required"),
  senderAddress: z.object({
    street: z.string().min(1, "required"),
    city: z.string().min(1, "required"),
    postCode: z.string().min(1, "required"),
    country: z.string().min(1, "required"),
  }),
  clientAddress: z.object({
    street: z.string().min(1, "required"),
    city: z.string().min(1, "required"),
    postCode: z.string().min(1, "required"),
    country: z.string().min(1, "required"),
  }),
  items: z.array(
    z.object({
      name: z.string().min(1, "required"),
      quantity: z.number().min(1, "required"),
      price: z.number().min(1, "required"),
      total: z.number(),
    }),
  ),
});

export type InvoiceFormType = z.infer<typeof invoiceSchema>;
