import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    const res = await fetch("http://192.168.0.110:3000/invoices");

    if (!res.ok) {
      throw new Error("Faild to load data from the server");
    }

    return await res.json();
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
