import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";

import type { InvoiceFormType } from "@/features/invoices/components/form/schema";

export const BillToSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  return (
    <fieldset className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      <legend className="heading-s-variant mb-6 text-purple">Bill To</legend>
      <div className="col-span-2 sm:col-span-3">
        {/* Name */}
        <Input
          label="Client’s Name"
          {...register("billTo.clientName")}
          error={errors.billTo?.clientName?.message}
        />
      </div>

      {/* Email */}
      <div className="col-span-2 sm:col-span-3">
        <Input
          label="Client’s Email"
          {...register("billTo.clientEmail")}
          error={errors.billTo?.clientEmail?.message}
        />
      </div>

      {/* Street Address */}
      <div className="col-span-2 sm:col-span-3">
        <Input
          label="Street Address"
          {...register("billTo.streetAddress")}
          error={errors.billTo?.streetAddress?.message}
        />
      </div>

      {/* City */}
      <div className="col-span-1">
        <Input
          label="City"
          {...register("billTo.city")}
          error={errors.billTo?.city?.message}
        />
      </div>

      {/* Post Code */}
      <div className="col-span-1">
        <Input
          label="Post Code"
          {...register("billTo.postCode")}
          error={errors.billTo?.postCode?.message}
        />
      </div>

      {/* Country */}
      <div className="col-span-2 sm:col-span-1">
        <Input
          label="Country"
          {...register("billTo.country")}
          error={errors.billTo?.country?.message}
        />
      </div>
    </fieldset>
  );
};
