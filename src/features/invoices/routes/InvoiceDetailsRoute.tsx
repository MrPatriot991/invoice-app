import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  deleteInvoice,
  updateInvoiceStatus,
  selectInvoiceById,
} from "@/features/invoices/store";

import { useModal } from "@/provider/modal/useModal";
import { GoBackButton } from "@/components/ui/GoBackButton";
import { DetailsInvoice } from "@/features/invoices/components/details";
import {
  DetailsHeader,
  DetailsMobileFotter,
  DeleteInvoiceModal,
} from "@/features/invoices/components/details";

import type { ButtonVariant } from "@/components/ui/Button/Button";

// Type for action buttons used in Header and MobileFooter
export interface ActionButton {
  text: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

const InvoiceDetailsRoute = () => {
  // Get invoice id from the URL
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Redux dispatch and selector to get invoice by id
  const dispatch = useAppDispatch();
  const invoiceById = useAppSelector(selectInvoiceById(id!));

  // Hooks to manage modal state
  const { openModal, closeModal } = useModal();

  // Simple go back handler
  const handleGoBack = () => {
    navigate(-1);
  };

  // Callback to delete an invoice
  // useCallback prevents unnecessary re-creations
  const handleDeleteInvoice = useCallback(
    async (id: string) => {
      try {
        // Dispatch delete thunk and unwrap to catch errors
        await dispatch(deleteInvoice(id)).unwrap();
        navigate("/"); // navigate to home after deletion
        closeModal(); // close the modal
      } catch (err) {
        console.log("Error deleting", err);
      }
    },
    [dispatch, navigate, closeModal],
  );

  // Callback to open delete confirmation modal
  const handleDeleteClick = useCallback(() => {
    openModal(
      <DeleteInvoiceModal id={id!} onDelete={handleDeleteInvoice} />,
      "center",
    );
  }, [id, openModal, handleDeleteInvoice]);

  // Callback to mark invoice as paid
  // useCallback ensures it doesn't recreate unnecessarily
  const handleMarkAsPaid = useCallback(() => {
    if (invoiceById?.status !== "paid" && id) {
      dispatch(updateInvoiceStatus({ id, status: "paid" }));
    }
  }, [dispatch, invoiceById, id]);

  // Action buttons for Header and MobileFooter
  // useMemo prevents recreating the array on every render
  const actionButtons: ActionButton[] = useMemo(
    () => [
      { text: "Edit", variant: "secondary" },
      { text: "Delete", variant: "danger", onClick: handleDeleteClick },
      { text: "Mark as Paid", variant: "purple", onClick: handleMarkAsPaid },
    ],
    [handleDeleteClick, handleMarkAsPaid],
  );

  // If no id, render nothing
  if (!id) return null;
  // If invoice not found, show placeholder
  if (!invoiceById) {
    return <p>No invoice data</p>;
  }

  // Main render
  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16">
      <GoBackButton onClick={handleGoBack} />
      <DetailsHeader buttons={actionButtons} status={invoiceById.status} />
      <DetailsInvoice invoice={invoiceById} />
      <DetailsMobileFotter buttons={actionButtons} />
    </div>
  );
};

export default InvoiceDetailsRoute;
