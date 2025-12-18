import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { useModal } from "./useModal";

const ModalRoot = () => {
  const { isOpen, content, position, closeModal } = useModal();

  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  const overlayBase =
    "fixed inset-0 z-30 bg-black/50 transition-colors duration-300";

  const overlayVariants = {
    left: "flex",
    center: "flex items-center justify-center p-4 md:p-10 z-50",
  };

  const containerBase =
    "transition-colors duration-300 max-h-[100dvh] overflow-hidden";

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
        <div className={overlayClass} onClick={closeModal}>
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
