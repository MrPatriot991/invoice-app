import { StatusBadge } from "@/components/common/statusBadge";
import { Button } from "@/components/ui/Button";

import type { ButtonVariant } from "@/components/ui/Button/Button";

interface ActionButton {
  text: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

const DetailsHeader = () => {
  const actionButtons: ActionButton[] = [
    { text: "Edit", variant: "secondary" },
    { text: "Delete", variant: "danger" },
    { text: "Mark as Paid", variant: "purple" },
  ];

  return (
    <div className="flex justify-between rounded-lg bg-container p-6 shadow-sm transition-colors duration-300 sm:p-8">
      <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-start">
        <p className="text-secondary transition-colors duration-300">Status</p>
        <StatusBadge status="Paid" />
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        {actionButtons.map(({ text, variant }) => (
          <Button key={text} variant={variant}>
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DetailsHeader;
