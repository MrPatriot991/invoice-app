import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import clsx from "clsx";

import { Button } from "@/components/ui/Button";

import type { ActionButton } from "@/features/invoices/routes/InvoiceDetailsRoute";

interface DetailsMobileFotterProps {
  buttons: ActionButton[];
}

const DetailsMobileFotter = ({ buttons }: DetailsMobileFotterProps) => {
  // State controlling the visibility of the mobile footer buttons
  const [showMobileActions, setShowMobileActions] = useState(false);

  // Get a reference to the scrollable container from the parent context
  const { scrollContainerRef } = useOutletContext<{
    scrollContainerRef: React.RefObject<HTMLElement>;
  }>();

  useEffect(() => {
    // Get the DOM element of the scroll container
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return; // Exit if no container

    // Flag to limit the number of state updates during fast scrolling
    let ticking = false;

    // Scroll event handler
    const onScroll = () => {
      // Only schedule an update if one is not already planned
      if (!ticking) {
        // Schedule the state update before the next repaint
        window.requestAnimationFrame(() => {
          // Determine if the scroll position is greater than 100px
          const scrolled = scrollContainer.scrollTop > 100;

          // Update state only if it has changed
          setShowMobileActions((prev) => (prev !== scrolled ? scrolled : prev));

          // Reset the flag to allow the next update
          ticking = false;
        });

        // Mark that an update is scheduled
        ticking = true;
      }
    };

    // Attach the scroll event listener to the container
    scrollContainer.addEventListener("scroll", onScroll);

    // Cleanup: remove the listener when the component unmounts or dependencies change
    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);

  return (
    <div
      className={clsx(
        "sticky bottom-0 left-0 right-0 flex items-center justify-end gap-2 rounded-lg bg-container p-6",
        "z-40 shadow-sm transition duration-300 sm:hidden sm:p-8",
        showMobileActions ? "translate-y-0 opacity-100" : "opacity-0",
      )}
    >
      {buttons.map(({ text, variant }) => (
        <Button key={text} variant={variant}>
          {text}
        </Button>
      ))}
    </div>
  );
};

export default DetailsMobileFotter;
