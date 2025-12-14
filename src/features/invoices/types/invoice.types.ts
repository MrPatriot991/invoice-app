/**
 * Defines the business status of an invoice within the application.
 */
export type InvoiceStatus = "all" | "paid" | "pending" | "draft";

/**
 * Represents a single item within an invoice, including price and quantity.
 */
export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

/**
 * Defines the structure for an address (used for both sender and client).
 */
export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

/**
 * The main interface defining the structure of a complete Invoice object.
 */
export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
  total: number;
}
