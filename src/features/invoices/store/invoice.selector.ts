import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/app/store";

export const selectAllInvoices = (state: RootState) => state.invoices.invoices;
export const selectFilter = (state: RootState) => state.invoices.filter;
export const selectStatus = (state: RootState) => state.invoices.loadingStatus;

// Sorts invoices by date (newest first) before filtering/rendering
export const selectSortedInvoices = createSelector(
  selectAllInvoices,
  (invoices) => {
    return [...invoices].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  },
);

// Filters the sorted invoices based on their current status
export const selectFilterInvoices = createSelector(
  selectSortedInvoices,
  selectFilter,
  (invoices, filter) => {
    if (filter === "all") return invoices;
    return invoices.filter((invoice) => invoice.status === filter);
  },
);

// Find one invoice by ID
export const selectInvoiceById = (id: string) => (state: RootState) =>
  state.invoices.invoices.find((invoice) => invoice.id === id);
