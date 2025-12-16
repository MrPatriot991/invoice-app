import { useNavigate } from "react-router-dom";

import { GoBackButton } from "@/components/ui/GoBackButton";
import {
  DetailsHeader,
  DetailsMobileFotter,
} from "@/features/invoices/components/details";

import type { ButtonVariant } from "@/components/ui/Button/Button";
export interface ActionButton {
  text: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

const InvoiceDetailsRoute = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const actionButtons: ActionButton[] = [
    { text: "Edit", variant: "secondary" },
    { text: "Delete", variant: "danger" },
    { text: "Mark as Paid", variant: "purple" },
  ];

  return (
    <div className="container mx-auto flex h-full flex-col py-8 md:py-12 lg:py-16">
      <GoBackButton onClick={handleGoBack} />
      <DetailsHeader buttons={actionButtons} />
      <div className="flex-1" />
      <DetailsMobileFotter buttons={actionButtons} />
    </div>
  );
};

export default InvoiceDetailsRoute;
