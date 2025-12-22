import { z } from "zod";

export const invoiceSchema = z.object({
  billForm: z.object({
    street: z.string().min(1, "required"),
    city: z.string().min(1, "required"),
    postCode: z.string().min(1, "required"),
    country: z.string().min(1, "required"),
  }),
  billTo: z.object({
    clientName: z.string().min(1, "required"),
    clientEmail: z.string().min(1, "required"),
    streetAddress: z.string().min(1, "required"),
    city: z.string().min(1, "required"),
    postCode: z.string().min(1, "required"),
    country: z.string().min(1, "required"),
  }),
  paymentInfo: z.object({
    invoiceDate: z.date().min(1, "required"),
    paymentTerm: z.string().min(1, "required"),
    projectDescription: z.string().min(1, "required"),
  }),
  items: z.array(
    z.object({
      name: z.string().min(1, "required"),
      qty: z.number().min(1, "required"),
      price: z.number().min(1, "required"),
      total: z.number(),
    }),
  ),
});

export type InvoiceFormType = z.infer<typeof invoiceSchema>;
