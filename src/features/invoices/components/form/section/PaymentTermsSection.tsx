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
          name="paymentInfo.invoiceDate"
          label="Issue Date"
          error={errors.paymentInfo?.invoiceDate?.message}
        />
      </div>

      {/* Payment Terms */}
      <div className="col-span-2 sm:col-span-1">
        <Select
          label="Payment Terms"
          {...register("paymentInfo.paymentTerm")}
          error={errors.paymentInfo?.paymentTerm?.message}
        >
          <option value="Net 1 Day">Net 1 Day</option>
          <option value="Net 7 Days">Net 7 Days</option>
          <option value="Net 14 Days">Net 14 Days</option>
          <option value="Net 30 Days">Net 30 Days</option>
        </Select>
      </div>

      {/* Project Description */}
      <div className="col-span-2">
        <Input
          label="Project Description"
          {...register("paymentInfo.projectDescription")}
          error={errors.paymentInfo?.projectDescription?.message}
        />
      </div>
    </div>
  );
};
