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
          type="text"
          label="Client’s Name"
          {...register("clientName")}
          error={errors?.clientName?.message}
        />
      </div>

      {/* Email */}
      <div className="col-span-2 sm:col-span-3">
        <Input
          type="text"
          label="Client’s Email"
          {...register("clientEmail")}
          error={errors?.clientEmail?.message}
        />
      </div>

      {/* Street Address */}
      <div className="col-span-2 sm:col-span-3">
        <Input
          type="text"
          label="Street Address"
          {...register("clientAddress.street")}
          error={errors.clientAddress?.street?.message}
        />
      </div>

      {/* City */}
      <div className="col-span-1">
        <Input
          type="text"
          label="City"
          {...register("clientAddress.city")}
          error={errors.clientAddress?.city?.message}
        />
      </div>

      {/* Post Code */}
      <div className="col-span-1">
        <Input
          type="text"
          label="Post Code"
          {...register("clientAddress.postCode")}
          error={errors.clientAddress?.postCode?.message}
        />
      </div>

      {/* Country */}
      <div className="col-span-2 sm:col-span-1">
        <Input
          type="text"
          label="Country"
          {...register("clientAddress.country")}
          error={errors.clientAddress?.country?.message}
        />
      </div>
    </fieldset>
  );
};
