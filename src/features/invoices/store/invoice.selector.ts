import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/app/store";

export const selectAllInvoices = (state: RootState) => state.invoices.invoices;
export const selectFilter = (state: RootState) => state.invoices.filter;
export const selectStatus = (state: RootState) => state.invoices.loadingStatus;

export const selectFilterInvoices = createSelector(
  selectAllInvoices,
  selectFilter,
  (invoices, filter) => {
    if (filter === "all") return invoices;
    return invoices.filter((invoice) => invoice.status === filter);
  },
);

export const selectInvoiceById = (id: string) => (state: RootState) =>
  state.invoices.invoices.find((invoice) => invoice.id === id);
