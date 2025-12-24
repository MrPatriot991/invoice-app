import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { useModal } from "./useModal";

const ModalRoot = () => {
  const { isOpen, content, position, closeModal } = useModal();

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;

    // Freeze the background (iOS-safe)
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    // Esc
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      // Return the background
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);

      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeModal]);

  const overlayBase =
    "fixed inset-0 z-30 bg-black/50 transition-colors duration-300 overflow-y-hidden touch-none flex";

  const overlayVariants = {
    left: "flex",
    center: "flex items-center justify-center p-4 md:p-10 z-50",
  };

  const containerBase =
    "transition-colors duration-300 overflow-hidden flex max-h-[100dvh]";

  const containerVariants = {
    left: "sm:max-w-[620px] lg:max-w-[720px] w-full flex sm:rounded-r-2xl  sm:mt-[79px] lg:mt-0 bg-main ",
    center: "max-w-[480px] bg-form rounded-xl",
  };

  const contentVariants = {
    left: "lg:ml-[103px] ml-0 flex-1",
    center: "w-full",
  };

  const overlayClass = clsx(overlayBase, overlayVariants[position]);
  const containerClass = clsx(containerBase, containerVariants[position]);
  const contentClass = clsx(contentVariants[position]);

  return createPortal(
    <>
      {isOpen && (
        <div
          className={overlayClass}
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div className={containerClass} onClick={(e) => e.stopPropagation()}>
            <div className={contentClass}>{content}</div>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
};

export default ModalRoot;
