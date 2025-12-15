import clsx from "clsx";

import { ChevronDown } from "lucide-react";

interface GoBackButtonProps {
  wrapperClassName?: string;
  className?: string;
  isModal?: boolean;
  onClick: () => void;
}

export const GoBackButton = ({
  onClick,
  className,
  wrapperClassName,
  isModal = false,
}: GoBackButtonProps) => {
  const wrapperClasses = clsx({ "mb-8": !isModal }, wrapperClassName);

  const buttonClasses = clsx(
    "heading-s-variant flex items-center gap-6 py-1 text-primary transition-colors duration-300 hover:text-text-secondary",
    className,
  );

  return (
    <div className={wrapperClasses}>
      <button
        aria-label="Go back to the previous page"
        className={buttonClasses}
        onClick={onClick}
        type="button"
      >
        <ChevronDown className="h-5 w-5 rotate-90 text-purple" />
        Go back
      </button>
    </div>
  );
};
