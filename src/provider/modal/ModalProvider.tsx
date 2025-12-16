import { useState, type ReactNode } from "react";
import { ModalContext } from "./ModalContext";

import type { ModalContextType, ModalPosition } from "./ModalContext";

/**
 * Defines the props accepted by the ModalProvider component.
 * @property children The React nodes that will have access to the modal context.
 */

interface ModalProps {
  children: ReactNode;
}

/**
 * A provider component that manages the state of the modal window (open/closed, content, position).
 * It makes the modal control functions and status available to all descendant components
 * via the ModalContext.
 *
 * @param {ModalProps} { children } The components wrapped by this provider.
 */

const ModalProvider = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [position, setPosition] = useState<ModalPosition>("center");

  /**
   * Function to handle opening the modal.
   * Updates the state to show the modal, sets the new content, and optionally sets the position.
   * @param node The ReactNode to display.
   * @param pos The desired position, defaults to 'center'.
   */

  const openModal: ModalContextType["openModal"] = (node, pos = "center") => {
    setIsOpen(true);
    setContent(node);
    setPosition(pos);
  };

  /**
   * Function to handle closing the modal.
   * Updates the state to hide the modal and clears the content.
   */
  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  // The value object provided to consuming components through the context.
  const contextValue = {
    isOpen,
    content,
    position,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
