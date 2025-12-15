import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/layout";
import { InvoicesRoute, DetailsRoute } from "@/features/invoices/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <InvoicesRoute /> },
      { path: "/invoice/:id", element: <DetailsRoute /> },
    ],
  },
]);
