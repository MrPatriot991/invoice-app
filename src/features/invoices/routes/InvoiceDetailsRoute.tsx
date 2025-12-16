import { useNavigate, useParams } from "react-router-dom";

import { useModal } from "@/provider/modal/useModal";
import { GoBackButton } from "@/components/ui/GoBackButton";
import { DetailsInvoice } from "@/features/invoices/components/details";
import {
  DetailsHeader,
  DetailsMobileFotter,
  DeleteInvoiceModal,
} from "@/features/invoices/components/details";

import type { ButtonVariant } from "@/components/ui/Button/Button";

import { invoices } from "@/features/invoices/lib/utils/mockData";

export interface ActionButton {
  text: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

const InvoiceDetailsRoute = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  if (!id) return null;

  const invoiceById = invoices.find((invoice) => invoice.id === id);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDeleteInvoice = (id: string) => {
    navigate("/");
    closeModal();
    return invoices.filter((invoice) => invoice.id !== id);
  };

  const handleDeleteClick = () => {
    openModal(
      <DeleteInvoiceModal id={id} onDelet={handleDeleteInvoice} />,
      "center",
    );
  };

  const actionButtons: ActionButton[] = [
    { text: "Edit", variant: "secondary" },
    { text: "Delete", variant: "danger", onClick: handleDeleteClick },
    { text: "Mark as Paid", variant: "purple" },
  ];

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
