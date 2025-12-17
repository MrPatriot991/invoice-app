import clsx from "clsx";

import type { InvoiceStatus } from "@/features/invoices/types";

interface StatusProps {
  status: InvoiceStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusProps) => {
  const baseStyle =
    "w-[104px] flex gap-1 items-center heading-s-variant justify-center rounded-md px-[17px] py-3 transition-colors duration-300";

  const statusStyle = {
    paid: {
      bg: "bg-[var(--color-green-bg)]",
      text: "text-[var(--color-green)]",
      dot: "bg-[var(--color-green)]",
    },
    pending: {
      bg: "bg-[var(--color-orange-bg)]",
      text: "text-[var(--color-orange)]",
      dot: "bg-[var(--color-orange)]",
    },
    draft: {
      bg: "bg-[var(--color-badge-bg)]",
      text: "text-[var(--text-badge-bg)]",
      dot: "bg-[var(--text-badge-bg)]",
    },
  }[status];

  return (
    <div className={clsx(baseStyle, statusStyle.bg, className)}>
      <div
        className={clsx(
          statusStyle.dot,
          "h-2 w-2 rounded-full p-1 transition-colors duration-300",
        )}
      />
      <div
        className={clsx(
          statusStyle.text,
          "capitalize transition-colors duration-300",
        )}
      >
        {status}
      </div>
    </div>
  );
};

export default StatusBadge;
