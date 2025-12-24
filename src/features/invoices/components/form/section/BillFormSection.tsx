import { useFormContext } from "react-hook-form";
import { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

import type { InvoiceFormType } from "@/features/invoices/components/form/schema";
import { useModal } from "@/provider/modal/useModal";

export const BillFormSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  const { isOpen } = useModal();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref: registerRef, ...registerProps } = register(
    "senderAddress.street",
  );

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <fieldset className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      <legend className="heading-s-variant col-span-full mb-6 text-purple">
        Bill Form
      </legend>
      {/* Street Address */}
      <div className="col-span-2 sm:col-span-3">
        <Input
          type="text"
          label="Street Address"
          {...registerProps}
          error={errors.senderAddress?.street?.message}
          ref={(e) => {
            registerRef(e);
            inputRef.current = e;
          }}
        />
      </div>

      {/* City */}
      <div className="col-span-1">
        <Input
          type="text"
          label="City"
          {...register("senderAddress.city")}
          error={errors.senderAddress?.city?.message}
        />
      </div>

      {/* Post Code */}
      <div className="col-span-1">
        <Input
          type="text"
          label="Post Code"
          {...register("senderAddress.postCode")}
          error={errors.senderAddress?.postCode?.message}
        />
      </div>

      {/* Country */}
      <div className="col-span-2 sm:col-span-1">
        <Input
          type="text"
          label="Country"
          {...register("senderAddress.country")}
          error={errors.senderAddress?.country?.message}
        />
      </div>
    </fieldset>
  );
};
