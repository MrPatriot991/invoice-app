import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/layout";
import { InvoicesRoute, InvoiceDetailsRoute } from "@/features/invoices/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <InvoicesRoute /> },
      { path: "/invoice/:id", element: <InvoiceDetailsRoute /> },
    ],
  },
]);
