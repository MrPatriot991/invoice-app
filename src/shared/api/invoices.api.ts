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
