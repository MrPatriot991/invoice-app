import { useState, useEffect, useRef } from "react";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import clsx from "clsx";

import { useModal } from "@/provider/modal/useModal";
import { useInvoiceForm } from "./hook/useInvoiceForm";
import { Button } from "@/components/ui/button";
import { GoBackButton } from "@/components/ui/GoBackButton";
import { BillFormSection } from "./section/BillFormSection";
import { BillToSection } from "./section/BillToSection";
import { PaymentTermsSection } from "./section/PaymentTermsSection";
import { ItemsSection } from "./section/ItemsSection";

import type { InvoiceFormType } from "./schema";

const InvoiceForm = () => {
  const methods = useInvoiceForm();
  const { handleSubmit } = methods;

  const [buttonHeight, setButtonHeight] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const lastScrollYRef = useRef(0);

  const { closeModal } = useModal();

  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.offsetHeight;
      setButtonHeight(height);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }

      const currentScrollY = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;

      const isNearBottom = scrollHeight - clientHeight - currentScrollY < 100;

      if (
        currentScrollY < lastScrollYRef.current ||
        currentScrollY < 50 ||
        isNearBottom
      ) {
        setShowButtons(true);
      } else if (
        currentScrollY > lastScrollYRef.current &&
        currentScrollY > 50 &&
        !isNearBottom
      ) {
        timeoutRef.current = window.setTimeout(() => {
          setShowButtons(false);
        }, 200);
      }

      lastScrollYRef.current = currentScrollY;
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCloseModal = () => {
    closeModal();
  };

  const onSubmit: SubmitHandler<InvoiceFormType> = (data) => {
    console.log(data);

    closeModal();
  };

  const padding = buttonHeight > 0 ? `${buttonHeight}px` : "88px";

  return (
    <div className="relative flex h-full flex-col">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto"
        style={{ paddingBottom: padding }}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="invoiceFormId"
            className="px-6 py-5 pt-24 sm:px-14 sm:py-14"
          >
            <GoBackButton
              onClick={handleCloseModal}
              isModal
              className="mb-6 sm:hidden"
            />
            <h2 className="heading-m-variant mb-6 text-primary transition-colors duration-300 sm:mb-11">
              New Invoice
            </h2>
            <div className="flex flex-col gap-10 sm:gap-12">
              <BillFormSection />
              <BillToSection />
              <PaymentTermsSection />
              <ItemsSection />
            </div>
            <div
              ref={buttonRef}
              className={clsx(
                "absolute bottom-0 left-0 right-0 flex w-full items-center justify-end bg-form px-6 py-5 sm:px-14 sm:py-8",
                "transition-[transform,background-color] duration-300 ease-in-out will-change-transform",
                showButtons ? "translate-y-0" : "translate-y-full",
              )}
            >
              <div className="flex w-full gap-2">
                <Button
                  onClick={closeModal}
                  variant="secondary"
                  className="mr-auto"
                >
                  Discard
                </Button>
                <Button type="submit" variant="dark">
                  Save as Draft
                </Button>
                <Button type="submit">Save & Send</Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default InvoiceForm;
