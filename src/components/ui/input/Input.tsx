import { forwardRef } from "react";
import clsx from "clsx";

import type { InputHTMLAttributes } from "react";

interface BaseProp {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

type InputProps = BaseProp & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, wrapperClassName, ...props }, ref) => {
    const inputClass = clsx(
      // layout
      "w-full px-4 h-12 rounded-md transition-colors duration-300",

      // typography
      "heading-s-variant text-primary",

      // colors
      "border border-[var(--color-border-input)] bg-[var(--bg-container)]",

      // states
      "focus:border-purple focus:outline-none hover:border-purple focus:ring-1",

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

        <input ref={ref} className={inputClass} {...props} />
      </div>
    );
  },
);

export default Input;
