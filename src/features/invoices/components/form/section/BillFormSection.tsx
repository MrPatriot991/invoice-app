import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";

import type { InvoiceFormType } from "@/features/invoices/components/form/schema";

export const BillFormSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  return (
    <fieldset className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      <legend className="heading-s-variant col-span-full mb-6 text-purple">
        Bill Form
      </legend>
      {/* Street Address */}
      <div className="col-span-2 sm:col-span-3">
        <Input
          label="Street Address"
          {...register("senderAddress.street")}
          error={errors.senderAddress?.street?.message}
        />
      </div>

      {/* City */}
      <div className="col-span-1">
        <Input
          label="City"
          {...register("senderAddress.city")}
          error={errors.senderAddress?.city?.message}
        />
      </div>

      {/* Post Code */}
      <div className="col-span-1">
        <Input
          label="Post Code"
          {...register("senderAddress.postCode")}
          error={errors.senderAddress?.postCode?.message}
        />
      </div>

      {/* Country */}
      <div className="col-span-2 sm:col-span-1">
        <Input
          label="Country"
          {...register("senderAddress.country")}
          error={errors.senderAddress?.country?.message}
        />
      </div>
    </fieldset>
  );
};
