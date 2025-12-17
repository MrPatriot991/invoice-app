import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
  filter: "all",
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});

export default invoiceSlice.reducer;
