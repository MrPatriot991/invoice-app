import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

interface SimpleDatePickerProps {
  label?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type="text"
          className="heading-s-variant h-12 w-full cursor-pointer rounded-md border border-[var(--color-border-input)] bg-[var(--bg-container)] px-4 pr-10 text-primary transition-colors duration-300 hover:border-purple focus:border-purple focus:outline-none"
          onClick={onClick}
          value={value || ""}
          readOnly
          ref={ref}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg">
          📆
        </span>
      </div>
    );
  },
);

const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

const SimpleDatePicker = ({ label }: SimpleDatePickerProps) => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="body-variant text-secondary transition-colors duration-300">
          {label}
        </label>
      )}
      <DatePicker
        selected={date}
        onChange={(d: Date | null) => setDate(d)}
        dateFormat="d MMM yyyy"
        customInput={<CustomInput />}
        wrapperClassName="w-full"
        popperPlacement="bottom-start"
        withPortal={isMobile}
      />
    </div>
  );
};

export default SimpleDatePicker;
