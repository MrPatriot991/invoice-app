import { mockInvoices } from "@/features/invoices/lib/utils/mockInvoices";

// Get the API base URL from environment variables (Vite requires the VITE_ prefix)
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetch invoices from the API, with a fallback to mock data if the request fails.
 */
export async function fetchInvoicesApi() {
  try {
    // Make a GET request to the /invoices endpoint
    const res = await fetch(`${API_URL}/invoices`);

    // If the response is not OK (status not in the 200–299 range), throw an error
    if (!res.ok) throw new Error("Failed to load data from the server");

    // Parse and return the JSON response
    return await res.json();
  } catch {
    // If the fetch fails or the server is unavailable, log a warning and return mock data
    console.warn("API unavailable, using mock data");
    return mockInvoices;
  }
}

// Sends a DELETE request to remove an invoice by its id
// Errors are thrown so they can be handled by createAsyncThunk
export async function deleteInvoiceApi(id: string) {
  // Perform DELETE request to the API
  const res = await fetch(`${API_URL}/invoices/${id}`, {
    method: "DELETE",
  });

  // If the server responds with an error status,
  // throw an error to be caught by the thunk
  if (!res.ok) {
    throw new Error("Failed to delete invoice");
  }

  // Return id so Redux can remove the invoice from the store
  return id;
}
