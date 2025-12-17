import { useModal } from "@/provider/modal/useModal";

import { Button } from "@/components/ui/Button";

interface IdProps {
  id: string;
  onDelete: (id: string) => void;
}

const DeleteInvoiceModal = ({ id, onDelete }: IdProps) => {
  const { closeModal } = useModal();

  return (
    <div className="flex flex-col gap-5 p-8 shadow-lg md:p-12">
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="heading-m-variant text-primary">Confirm Deletion</h3>
        <p className="body text-tertiary">
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>
      </div>
      <div className="ml-auto flex gap-2">
        <Button
          variant="secondary"
          className="px-3 py-2 sm:px-6 sm:py-4"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          className="px-3 py-2 sm:px-6 sm:py-4"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteInvoiceModal;
