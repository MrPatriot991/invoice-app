// useFormContext hook to access parent form
import { Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ItemsSection = () => {
  return (
    <div>
      <h3 className="mb-4 text-lg text-gray-500">Item List</h3>

      <div className="mb-4 grid grid-cols-9 gap-4 sm:grid-cols-12">
        <div className="col-span-9 sm:col-span-5">
          <Input label="Item Name" />
        </div>
        <div className="col-span-2 justify-center">
          <Input
            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            label="Qty."
            type="number"
          />
        </div>
        <div className="col-span-3 sm:col-span-2">
          <Input
            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            label="Price"
            type="number"
          />
        </div>
        <div className="col-span-3 mb-3 flex items-end justify-center sm:col-span-2">
          <span className="heading-s-variant text-tertiary transition-colors duration-300">
            150
          </span>
        </div>
        <div className="col-span-1 flex items-end">
          <button
            type="button"
            className="mb-[10px] px-1 text-gray-400 hover:text-danger"
          >
            <Trash2 className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button type="button" variant="secondary" className="w-full">
        + Add New Item
      </Button>
    </div>
  );
};
