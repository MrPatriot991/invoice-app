// useFormContext hook to access parent form
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import type { InvoiceFormType } from "@/features/invoices/components/form/schema";

export const ItemsSection = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const hasItemErrors = errors.items?.some((item) => item?.qty || item?.price);

  return (
    <div>
      <h3 className="mb-4 text-lg text-gray-500">Item List</h3>

      {fields.map((_, index) => {
        const qty = watch(`items.${index}.qty`) || 0;
        const price = watch(`items.${index}.price`) || 0;
        const total = qty * price;

        return (
          <div
            key={index}
            className="mb-4 grid grid-cols-9 gap-4 sm:grid-cols-12"
          >
            <div className="col-span-9 sm:col-span-5">
              <Input
                label="Item Name"
                {...register(`items.${index}.name`)}
                error={errors.items?.[index]?.name?.message}
              />
            </div>
            <div className="col-span-2 justify-center">
              <Controller
                name={`items.${index}.qty`}
                control={control}
                rules={{
                  required: "Quantity is required",
                  min: { value: 1, message: "Quantity must be at least 1" },
                }}
                render={({ field }) => (
                  <Input
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    label="Qty."
                    type="number"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value === ""
                          ? undefined
                          : Number(e.target.value),
                      )
                    }
                    error={errors.items?.[index]?.qty?.message}
                  />
                )}
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <Input
                className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                label="Price"
                type="number"
                {...register(`items.${index}.price`, { valueAsNumber: true })}
                error={errors.items?.[index]?.price?.message}
              />
            </div>
            <div className="col-span-3 mb-3 flex items-end justify-center sm:col-span-2">
              <span className="heading-s-variant text-tertiary transition-colors duration-300">
                {total.toFixed(0)}
              </span>
            </div>

            {/* Btuun Delete Item */}
            <div className="col-span-1 flex items-end">
              <button
                type="button"
                className="mb-[10px] px-1 text-gray-400 hover:text-danger"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-6 w-6" />
              </button>
            </div>
          </div>
        );
      })}

      {/* Add Item */}
      <Button
        type="button"
        variant="secondary"
        className="w-full"
        onClick={() => append({ name: "", qty: 1, price: 0, total: 0 })}
      >
        + Add New Item
      </Button>

      {hasItemErrors && (
        <p className="mt-4 text-center text-red-500">
          Please fill all required item fields before submitting.
        </p>
      )}
    </div>
  );
};
