import { Check } from "lucide-react";
import clsx from "clsx";

interface CheckBoxProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;

  // An object for styling various parts of the component
  classNames?: {
    wrapper?: string;
    checkbox?: string;
    labelSpan?: string;
  };

  defaultBg?: string; // default color (for example, when the dropdown is open)
  activeBg?: string; // color when checked
  tickColor?: string; // check mark color
}

const Checkbox = ({
  id,
  label,
  onChange,
  checked,
  classNames,
  defaultBg = "bg-[var(--color-checkbox-bg)]",
  activeBg = "bg-[var(--color-purple-200)]",
  tickColor = "text-white",
  ...props
}: CheckBoxProps) => {
  const handleChange = () => {
    onChange?.(!checked);
  };

  return (
    <label
      htmlFor={id}
      className={clsx(
        "group flex select-none items-center rounded px-3 py-2",
        "cursor-pointer transition-colors duration-300",
        classNames?.wrapper,
      )}
    >
      <input
        {...props}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />

      <div
        className={clsx(
          "relative mr-3 flex h-5 w-5 items-center justify-center rounded",
          "border-2 transition duration-300",
          "border-[var(--color-checkbox-bg)] group-hover:border-purple",
          checked ? activeBg : defaultBg,
          classNames?.checkbox,
        )}
      >
        <Check
          className={clsx(
            "h-3 w-3",
            tickColor,
            checked ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      {label && <span className={classNames?.labelSpan}>{label}</span>}
    </label>
  );
};

export default Checkbox;
