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
          {...register("billForm.street")}
          error={errors.billForm?.street?.message}
        />
      </div>

      {/* City */}
      <div className="col-span-1">
        <Input
          label="City"
          {...register("billForm.city")}
          error={errors.billForm?.city?.message}
        />
      </div>

      {/* Post Code */}
      <div className="col-span-1">
        <Input
          label="Post Code"
          {...register("billForm.postCode")}
          error={errors.billForm?.postCode?.message}
        />
      </div>

      {/* Country */}
      <div className="col-span-2 sm:col-span-1">
        <Input
          label="Country"
          {...register("billForm.country")}
          error={errors.billForm?.country?.message}
        />
      </div>
    </fieldset>
  );
};
