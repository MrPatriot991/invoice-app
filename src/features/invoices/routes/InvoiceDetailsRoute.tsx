import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectInvoiceById } from "../store/invoice.selector";
import { deleteInvoice } from "../store/invoice.slice";

import { useModal } from "@/provider/modal/useModal";
import { GoBackButton } from "@/components/ui/GoBackButton";
import { DetailsInvoice } from "@/features/invoices/components/details";
import {
  DetailsHeader,
  DetailsMobileFotter,
  DeleteInvoiceModal,
} from "@/features/invoices/components/details";

import type { ButtonVariant } from "@/components/ui/Button/Button";

export interface ActionButton {
  text: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

const InvoiceDetailsRoute = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const invoiceById = useAppSelector(selectInvoiceById(id!));

  const { openModal, closeModal } = useModal();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDeleteInvoice = useCallback(
    async (id: string) => {
      try {
        await dispatch(deleteInvoice(id)).unwrap();
        navigate("/");
        closeModal();
      } catch (err) {
        console.log("Error deleting", err);
      }
    },
    [dispatch, navigate, closeModal],
  );

  const handleDeleteClick = useCallback(() => {
    openModal(
      <DeleteInvoiceModal id={id!} onDelete={handleDeleteInvoice} />,
      "center",
    );
  }, [id, openModal, handleDeleteInvoice]);

  const actionButtons: ActionButton[] = useMemo(
    () => [
      { text: "Edit", variant: "secondary" },
      { text: "Delete", variant: "danger", onClick: handleDeleteClick },
      { text: "Mark as Paid", variant: "purple" },
    ],
    [handleDeleteClick],
  );

  if (!id) return null;
  if (!invoiceById) {
    return <p>No invoice data</p>;
  }

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
