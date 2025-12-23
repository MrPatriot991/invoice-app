import { forwardRef } from "react";
import { Controller, useFormContext, type Path } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import type { InvoiceFormType } from "@/features/invoices/components/form/schema";

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

interface SimpleDatePickerProps {
  name: Path<InvoiceFormType>;
  label?: string;
  error?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <div className="relative w-full">
      <input
        type="text"
        onClick={onClick}
        value={value || ""}
        readOnly
        ref={ref}
        className="heading-s-variant h-12 w-full cursor-pointer rounded-md border border-[var(--color-border-input)] bg-[var(--bg-container)] px-4 pr-10 text-primary transition-colors duration-300 hover:border-purple focus:border-purple focus:outline-none"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        📆
      </span>
    </div>
  ),
);

const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

const SimpleDatePicker = ({ name, label, error }: SimpleDatePickerProps) => {
  const { control } = useFormContext<InvoiceFormType>();

  return (
    <div className="flex min-h-20 flex-col gap-2">
      <div className="flex items-center justify-between">
        {label && (
          <label className="body-variant text-secondary transition-colors duration-300">
            {label}
          </label>
        )}
        {error && (
          <p className="body-variant text-danger" role="alert">
            {error}
          </p>
        )}
      </div>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            selected={field.value as Date | null}
            onChange={(date: Date | null) => field.onChange(date)}
            customInput={<CustomInput />}
            dateFormat="d MMM yyyy"
            withPortal={isMobile}
            wrapperClassName="w-full"
            popperPlacement="bottom-start"
          />
        )}
      />
    </div>
  );
};

export default SimpleDatePicker;
