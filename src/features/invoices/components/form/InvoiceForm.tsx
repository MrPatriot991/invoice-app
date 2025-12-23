import { useState, useEffect, useRef } from "react";
import { FormProvider, type SubmitHandler } from "react-hook-form";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  createNewInvoice,
  updateExistingInvoice,
} from "@/features/invoices/store/invoice.slice";
import { selectInvoiceById } from "@/features/invoices/store";

import { useModal } from "@/provider/modal/useModal";
import { useInvoiceForm } from "./hook/useInvoiceForm";
import { Button } from "@/components/ui/button";
import { GoBackButton } from "@/components/ui/GoBackButton";
import { BillFormSection } from "./section/BillFormSection";
import { BillToSection } from "./section/BillToSection";
import { PaymentTermsSection } from "./section/PaymentTermsSection";
import { ItemsSection } from "./section/ItemsSection";

import type { InvoiceFormType } from "./schema";
import type { Invoice } from "@/features/invoices/types";

interface InvoiceFormProps {
  invoiceId?: string;
}

const InvoiceForm = ({ invoiceId }: InvoiceFormProps) => {
  const dispatch = useAppDispatch();
  const invoiceById = useAppSelector(selectInvoiceById(invoiceId!));

  const methods = useInvoiceForm(invoiceById);
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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const currentScrollY = scrollContainer.scrollTop;
      const isNearBottom =
        scrollContainer.scrollHeight -
          scrollContainer.clientHeight -
          currentScrollY <
        100;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      const isAtTop = currentScrollY < 50;

      if (isScrollingUp || isAtTop || isNearBottom) {
        setShowButtons(true);
      } else {
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

  const prepareInvoicePayload = (
    data: InvoiceFormType,
    status: Invoice["status"],
    existingId?: string,
  ): Invoice => {
    const addedMs = data.paymentTerms * 1000 * 60 * 60 * 24;
    const paymentDueDate = new Date(data.createdAt.getTime() + addedMs);

    const validItems = data.items.filter(
      (item) => item.name && item.name.trim() !== "",
    );

    return {
      ...data,
      id: existingId || uuidv4().slice(0, 6).toUpperCase(),
      status: status,
      total: validItems.reduce(
        (acc, item) => acc + (item.price * item.quantity || 0),
        0,
      ),
      items: validItems.map((item) => ({
        ...item,
        total: (item.quantity || 0) * (item.price || 0),
      })),
      createdAt: data.createdAt.toISOString().split("T")[0],
      paymentDue: paymentDueDate.toISOString().split("T")[0],
    };
  };

  const onSubmit: SubmitHandler<InvoiceFormType> = (data) => {
    const payload = prepareInvoicePayload(data, "pending", invoiceId);

    if (invoiceId) {
      dispatch(updateExistingInvoice({ id: invoiceId, data: payload }));
    } else {
      dispatch(createNewInvoice(payload));
    }
    closeModal();
  };

  const handleSaveAsDraft = () => {
    const data = methods.getValues();
    const draftPayload = prepareInvoicePayload(data, "draft");

    if (invoiceId) {
      dispatch(updateExistingInvoice({ id: invoiceId, data: draftPayload }));
    } else {
      dispatch(createNewInvoice(draftPayload));
    }
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
            className="px-6 py-5 pt-24 sm:px-14 sm:py-14"
          >
            <GoBackButton
              onClick={handleCloseModal}
              isModal
              className="mb-6 sm:hidden"
            />

            <h2 className="heading-m-variant mb-6 text-primary transition-colors duration-300 sm:mb-11">
              {invoiceId ? (
                <>
                  Edit <span className="text-[var(--color-gray-400)]">#</span>
                  {invoiceId}
                </>
              ) : (
                "New Invoice"
              )}
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
              {invoiceId ? (
                <div className="flex w-full justify-end gap-2">
                  <Button onClick={closeModal} variant="secondary">
                    Discard
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              ) : (
                <div className="flex w-full gap-2">
                  <Button
                    onClick={closeModal}
                    variant="secondary"
                    className="mr-auto"
                  >
                    Discard
                  </Button>
                  <Button
                    type="button"
                    variant="dark"
                    onClick={handleSaveAsDraft}
                  >
                    Save as Draft
                  </Button>
                  <Button type="submit">Save & Send</Button>
                </div>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default InvoiceForm;
