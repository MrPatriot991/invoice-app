import clsx from "clsx";
import { Button } from "@/components/ui/Button";

import type { ActionButton } from "@/features/invoices/routes/InvoiceDetailsRoute";

interface DetailsMobileFotterProps {
  buttons: ActionButton[];
}

const DetailsMobileFotter = ({ buttons }: DetailsMobileFotterProps) => {
  return (
    <div
      className={clsx(
        "sticky bottom-0 left-0 right-0 flex items-center justify-end gap-2 rounded-lg bg-container p-6",
        "shadow-sm transition-colors duration-300 sm:hidden sm:p-8",
      )}
    >
      {buttons.map(({ text, variant }) => (
        <Button key={text} variant={variant}>
          {text}
        </Button>
      ))}
    </div>
  );
};

export default DetailsMobileFotter;
