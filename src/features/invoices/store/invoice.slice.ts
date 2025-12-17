import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInvoicesApi } from "@/shared/api/invoices.api";

import type { Invoice, InvoiceStatus, InvoiceLoadingStatus } from "../types";

interface InvoiceState {
  invoices: Invoice[];
  filter: InvoiceStatus | "All";
  loadingStatus: InvoiceLoadingStatus;
}

const initialState: InvoiceState = {
  invoices: [],
  filter: "All",
  loadingStatus: "idle",
};

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const res = await fetchInvoicesApi();

    return res;
  },
);

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
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
      });
  },
});

export default invoiceSlice.reducer;
