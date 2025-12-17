import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteInvoiceApi, fetchInvoicesApi } from "@/shared/api/invoices.api";

import type { Invoice, InvoiceStatus, InvoiceLoadingStatus } from "../types";

interface InvoiceState {
  invoices: Invoice[];
  filter: InvoiceStatus | "all";
  loadingStatus: InvoiceLoadingStatus;
}

const initialState: InvoiceState = {
  invoices: [],
  filter: "all",
  loadingStatus: "idle",
};

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const res = await fetchInvoicesApi();

    return res;
  },
);

export const deleteInvoice = createAsyncThunk(
  "invoice/deleteInvoice",
  async (id: string) => {
    const res = await deleteInvoiceApi(id);

    return res;
  },
);

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder

      // fetchInvoices
      .addCase(fetchInvoices.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loadingStatus = "success";
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state) => {
        state.loadingStatus = "error";
      })

      // Delete Invoice
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        state.invoices.filter((invoice) => invoice.id !== action.payload);
      });
  },
});

export const { setFilter } = invoiceSlice.actions;

export default invoiceSlice.reducer;
