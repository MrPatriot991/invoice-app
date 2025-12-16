import { createContext, type ReactNode } from "react";

/**
 * Defines the possible positions for the modal window.
 */
export type ModalPosition = "center" | "left";

/**
 * Defines the structure of the data and functions provided by the Modal Context.
 * @property isOpen A boolean indicating whether the modal is currently open.
 * @property content The React node content displayed inside the modal, or null if closed.
 * @property position The current position of the modal ('center' or 'left').
 * @property openModal A function to open the modal with specific content and an optional position.
 * @property closeModal A function to close the modal window.
 */

export interface ModalContextType {
  isOpen: boolean;
  content: ReactNode | null;
  position: ModalPosition;
  openModal: (content: ReactNode, position?: ModalPosition) => void;
  closeModal: () => void;
}

/**
 * Creates the Modal Context.
 * The default value is set to `null`, as the actual context value will be provided
 * by a Provider component higher up in the component tree.
 */
export const ModalContext = createContext<ModalContextType | null>(null);
