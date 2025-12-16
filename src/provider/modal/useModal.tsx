import { useContext } from "react";
import { ModalContext } from "./ModalContext";

/**
 * A custom hook that provides access to the Modal Context.
 * It allows components to easily open, close, and check the status of the modal.
 *
 * @returns The ModalContextType object containing isOpen, content, position, openModal, and closeModal functions.
 * @throws An error if the hook is used outside of a <ModalProvider>.
 */

export function useModal() {
  const modal = useContext(ModalContext);

  if (!modal) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return modal;
}
