import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createNewInvoiceApi,
  deleteInvoiceApi,
  fetchInvoicesApi,
  updateInvoiceApi,
  updateInvoiceStatusApi,
} from "@/shared/api/invoices.api";

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
  "invoices/deleteInvoice",
  async (id: string) => {
    const res = await deleteInvoiceApi(id);

    return res;
  },
);

export const updateInvoiceStatus = createAsyncThunk(
  "invoices/updateStatus",
  async ({ id, status }: { id: string; status: InvoiceStatus }) => {
    const res = await updateInvoiceStatusApi(id, status);

    return res;
  },
);

export const createNewInvoice = createAsyncThunk(
  "invoices/createNewInvoice",
  async (data: Invoice) => {
    const res = await createNewInvoiceApi(data);

    return res;
  },
);

export const updateExistingInvoice = createAsyncThunk(
  "invoices/updateInvoice",
  async ({ id, data }: { id: string; data: Invoice }) => {
    const res = await updateInvoiceApi(id, data);

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
      })

      // Update Status
      .addCase(updateInvoiceStatus.fulfilled, (state, action) => {
        const invoice = state.invoices.find(
          (invoice) => invoice.id === action.payload.id,
        );

        if (invoice) invoice.status = action.payload.status;
      })

      // Create New Invoice
      .addCase(createNewInvoice.fulfilled, (state, action) => {
        state.invoices.unshift(action.payload.data);
      })

      // Update Invoice
      .addCase(updateExistingInvoice.fulfilled, (state, action) => {
        const index = state.invoices.findIndex(
          (invoice) => invoice.id === action.payload.id,
        );

        if (index !== -1) {
          state.invoices[index] = action.payload.data;
        }
      });
  },
});

export const { setFilter } = invoiceSlice.actions;

export default invoiceSlice.reducer;
