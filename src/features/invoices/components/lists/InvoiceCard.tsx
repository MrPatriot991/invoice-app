import { StatusBadge } from "@/components/common/statusBadge";

const InvoiceCard = () => {
  return (
    <article className="grid cursor-pointer grid-cols-2 items-center justify-between gap-4 rounded-lg bg-container p-6 shadow-sm [grid-template-areas:'id_client'_'due_status'_'total_status'] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl md:gap-7 md:py-4 md:[grid-template-areas:'id_due_client_total_status_arrow'] md:[grid-template-columns:auto_auto_1fr_auto_auto_auto]">
      <h3 className="heading-s-variant text-primary [grid-area:id]">
        <span className="text-[var(--color-gray-500)]">#RX3080</span>
      </h3>
      <p className="body text-secondary col-start-1 [grid-area:due]">
        Due 19 Aug 2021
      </p>
      <p className="body text-secondary justify-self-end [grid-area:client] md:justify-self-start">
        Jensen Huang
      </p>
      <p className="heading-s text-primary [grid-area:total]">£ 1800</p>
      <div className="justify-self-end [grid-area:status] md:justify-self-start">
        <StatusBadge status="Pending" />
      </div>
      <div className="hidden md:inline-block md:[grid-area:arrow]">Arrow</div>
    </article>
  );
};

export default InvoiceCard;
