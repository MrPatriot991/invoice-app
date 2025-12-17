import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import { selectFilter } from "@/features/invoices/store";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setFilter } from "@/features/invoices/store";

import { Checkbox } from "@/components/ui/checkbox";

import type { InvoiceStatus } from "@/features/invoices/types";

interface StatusOptions {
  id: InvoiceStatus | "all";
  label: string;
}

const STATUS_OPTIONS: StatusOptions[] = [
  { id: "all", label: "All" },
  { id: "paid", label: "Paid" },
  { id: "pending", label: "Pending" },
  { id: "draft", label: "Draft" },
];

const InvoiceFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectFilter);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    // Function for handling clicks outside the element
    const handleClickOutside = (event: MouseEvent) => {
      // If the click occurred outside the dropdown and outside the button, close it
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Function for processing key presses
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listeners only when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    // Cleanup function: remove event listeners when the component is closed or unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cleanup effect to clear any pending timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        // Prevent calling setIsOpen on unmounted component
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handles filter selection
  const handleFilterChange = (statusId: InvoiceStatus | "all") => {
    // Filter update action with the selected status
    dispatch(setFilter(statusId));

    // Clear any previous timeout to prevent race conditions
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to close the dropdown after 200ms,
    // allowing the checkbox to show its active state before closing
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div className="relative">
      <button
        tabIndex={0}
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-3 p-2"
        onClick={toggleDropdown}
      >
        <span className="heading-s-variant inline-block text-primary transition-colors duration-300">
          Filter <span className="hidden md:inline-block"> by status</span>
        </span>
        <ChevronDown
          className={clsx(
            "h-4 w-4 text-purple transition-transform duration-300",
            isOpen ? "rotate-180" : "",
          )}
        />
      </button>
      <div
        ref={dropdownRef}
        role="menu"
        aria-multiselectable="true"
        className={clsx(
          "absolute z-50 mt-4 origin-top overflow-y-auto rounded-lg p-3 shadow-lg transition duration-300",
          "bg-[var(--color-dropdown-bg)]",
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0",
        )}
      >
        {STATUS_OPTIONS.map((option) => {
          const isChecked = currentFilter === option.id;

          return (
            <div tabIndex={isOpen ? 0 : -1} key={option.id} role="option">
              {isOpen && (
                <Checkbox
                  id={option.id}
                  label={option.label}
                  checked={isChecked}
                  classNames={{
                    labelSpan:
                      "heading-s-variant text-[var(--text-primary)] transition-colors duration-300",
                  }}
                  onChange={() => handleFilterChange(option.id)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceFilters;
