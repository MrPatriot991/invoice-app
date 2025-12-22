import { useFormContext } from "react-hook-form";

import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SimpleDatePicker } from "@/components/ui/simpleDatePicker";

import type { InvoiceFormType } from "@/features/invoices/components/form/schema";

export const PaymentTermsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
      {/* Invoice Date */}
      <div className="col-span-2 w-full sm:col-span-1">
        <SimpleDatePicker
          name="createdAt"
          label="Invoice Date"
          error={errors.createdAt?.message}
        />
      </div>

      {/* Payment Terms */}
      <div className="col-span-2 sm:col-span-1">
        <Select
          label="Payment Terms"
          {...register("paymentTerms", { valueAsNumber: true })}
          error={errors.paymentTerms?.message}
        >
          <option value={1}>Net 1 Day</option>
          <option value={7}>Net 7 Days</option>
          <option value={14}>Net 14 Days</option>
          <option value={30}>Net 30 Days</option>
        </Select>
      </div>

      {/* Project Description */}
      <div className="col-span-2">
        <Input
          label="Project Description"
          {...register("description")}
          error={errors.description?.message}
        />
      </div>
    </div>
  );
};
