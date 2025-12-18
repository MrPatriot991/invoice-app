import clsx from "clsx";

import { ChevronDown } from "lucide-react";

import type { ReactNode, SelectHTMLAttributes } from "react";

interface BaseProps {
  label?: string;
  error?: string;
  className?: string;
  children?: ReactNode;
  wrapperClassName?: string;
}

type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  error,
  className,
  children,
  wrapperClassName,
  ...props
}: SelectProps) => {
  const selectClass = clsx(
    // layout
    "w-full px-4 h-12 rounded-md transition-colors duration-300",

    // Styling to hide the native arrow and add a custom one
    "appearance-none",
    "pr-10",
    "bg-right-9",

    // typography
    "heading-s-variant text-primary",

    // colors
    "border border-[var(--color-border-input)] bg-[var(--bg-container)]",

    // states
    "focus:border-purple focus:outline-none hover:border-purple cursor-pointer",

    // error
    error && "border-danger",

    // external
    className,
  );

  return (
    <div className={clsx("flex flex-col gap-2", wrapperClassName)}>
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

      <div className="relative">
        <select {...props} className={selectClass}>
          {children}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <ChevronDown className="h-5 w-5 text-purple" />
        </div>
      </div>
    </div>
  );
};

export default Select;
