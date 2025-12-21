import clsx from "clsx";

import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "purple" | "secondary" | "dark" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "purple",
  isLoading = false,
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyle =
    "px-4 sm:px-6 py-3 sm:py-4 rounded-full text-center justify-center flex items-center gap-2 md:gap-4 heading-s-variant transition-colors duration-300";

  const variantStyle = {
    purple:
      "bg-[var(--color-purple)] text-white hover:bg-[var(--color-purple-light)] disabled:bg-[var(--color-purple-light)]",
    dark: "bg-[var(--color-gray-600)] text-[var(--text-tertiary)] hover:bg-[var(--color-draft-btn-hover)]",
    secondary:
      "bg-[var(--color-secondary)] text-tertiary hover:bg-[var(--color-secondary-btn-hover)]",
    danger:
      "bg-[var(--color-danger-200)] text-white hover:bg-[var(--color-danger-100)] disabled:bg-[var(--color-danger-100)]",
  };

  const buttonClass = clsx(
    baseStyle,
    variantStyle[variant],
    fullWidth && "w-full",
    disabled || isLoading ? "cursor-not-allowed opacity-60" : "cursor-pointer",
    className,
  );

  return (
    <button className={buttonClass} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
