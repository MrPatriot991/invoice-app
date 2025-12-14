import clsx from "clsx";

import type { InvoiceStatus } from "@/features/invoices/types";

interface StatusProps {
  status: InvoiceStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusProps) => {
  const baseStyle =
    "w-[104px] flex gap-1 items-center heading-s-variant justify-center rounded-md px-[18px] py-3";

  const statusStyle = {
    Paid: {
      bg: "bg-[var(--color-green-bg)]",
      text: "text-[var(--color-green)]",
      dot: "bg-[var(--color-green)]",
    },
    Pending: {
      bg: "bg-[var(--color-orange-bg)]",
      text: "text-[var(--color-orange)]",
      dot: "bg-[var(--color-orange)]",
    },
    Draft: {
      bg: "bg-[var(--color-badge-bg)]",
      text: "text-[var(--text-badge-bg)]",
      dot: "bg-[var(--text-badge-bg)]",
    },
  }[status];

  return (
    <div className={clsx(baseStyle, statusStyle.bg, className)}>
      <span
        className={clsx(statusStyle.dot, "inline-block h-2 w-2 rounded-full")}
      />
      <span className={clsx(statusStyle.text, "inline-block")}>{status}</span>
    </div>
  );
};

export default StatusBadge;
