import { configureStore } from "@reduxjs/toolkit";

import { invoiceReducer } from "@/features/invoices/store";

/**
 * Configures the Redux store for the application.
 * It combines all feature reducers into a single root reducer.
 */
export const store = configureStore({
  reducer: {
    // Assign the invoice reducer to the 'invoices' slice of the state
    invoices: invoiceReducer,
  },
});

/**
 * Infers the 'RootState' type from the store itself.
 * This type represents the entire Redux store shape (e.g., { invoices: InvoiceState }).
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Infers the 'AppDispatch' type from the store itself.
 * This is used for correctly typing the dispatch function, especially for async actions (Thunks).
 */
export type AppDispatch = typeof store.dispatch;
