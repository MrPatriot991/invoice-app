import type { InvoiceItem } from "@/features/invoices/types";

interface ItemsInfoProps {
  items: InvoiceItem[];
  total: number;
}

export const ItemsInfo = ({ items, total }: ItemsInfoProps) => {
  return (
    <>
      <div className="flex flex-col gap-6 rounded-t-lg bg-table p-6 transition-colors duration-300">
        <div className="body hidden grid-cols-[3fr_1fr_1fr_1fr] text-secondary transition-colors duration-300 md:grid">
          <div className="text-start">Item Name</div>
          <div className="text-center">QTY.</div>
          <div className="text-right">Price</div>
          <div className="text-right">Total</div>
        </div>

        {items.map((item) => {
          const totalRound = item.total.toFixed();

          return (
            <div
              key={item.name}
              className="grid w-full grid-cols-2 gap-y-2 md:grid-cols-[3fr_1fr_1fr_1fr]"
            >
              {/* NAME */}
              <div className="heading-s-variant text-primary transition-colors duration-300">
                {item.name}
              </div>

              {/* TOTAL (mobile) */}
              <div className="row-span-2 flex items-center justify-end text-primary transition-colors duration-300 md:hidden">
                <span>£ {totalRound}</span>
              </div>

              {/* QTY + PRICE (mobile stacked under name) */}
              <div className="heading-s-variant flex gap-0 text-secondary transition-colors duration-300 sm:gap-4 md:hidden">
                <span>{item.quantity} x</span>
                <span>£ {totalRound}</span>
              </div>

              {/* DESKTOP VERSION */}
              <div className="heading-s-variant hidden text-center text-secondary transition-colors duration-300 md:block">
                {item.quantity}
              </div>

              <div className="heading-s-variant hidden text-right text-secondary transition-colors duration-300 md:block">
                {totalRound}
              </div>

              <div className="heading-s-variant hidden text-right text-primary transition-colors duration-300 md:block">
                <span>£ {item.total.toFixed(0)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-b-lg bg-[var(--color-total-bg)] p-6 transition-colors duration-300 md:px-8 md:py-6">
        <p className="body hidden text-white sm:block">Amount Due</p>
        <p className="body text-white sm:hidden">Grand Total</p>
        <p className="heading-m-variant text-white">£ {total}</p>
      </div>
    </>
  );
};
