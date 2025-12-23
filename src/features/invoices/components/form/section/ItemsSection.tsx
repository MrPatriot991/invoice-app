import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import type {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  UseFieldArrayRemove,
  FieldErrors,
} from "react-hook-form";
import type { InvoiceFormType } from "@/features/invoices/components/form/schema";

interface ItemRowProps {
  index: number;
  errors: FieldErrors<InvoiceFormType>;
  remove: UseFieldArrayRemove;
  watch: UseFormWatch<InvoiceFormType>;
  register: UseFormRegister<InvoiceFormType>;
  setValue: UseFormSetValue<InvoiceFormType>;
}

export const ItemsSection = () => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div>
      <h3 className="mb-4 text-lg text-gray-500">Item List</h3>

      {fields.map((_, index) => {
        return (
          <ItemRow
            key={index}
            index={index}
            watch={watch}
            remove={remove}
            errors={errors}
            register={register}
            setValue={setValue}
          />
        );
      })}

      {/* Add Item */}
      <Button
        type="button"
        variant="secondary"
        className="w-full"
        onClick={() => append({ name: "", quantity: 1, price: 0, total: 0 })}
      >
        + Add New Item
      </Button>
    </div>
  );
};

const ItemRow = ({
  index,
  register,
  errors,
  remove,
  watch,
  setValue,
}: ItemRowProps) => {
  const qty = watch(`items.${index}.quantity`) || 0;
  const price = watch(`items.${index}.price`) || 0;
  const total = qty * price;

  useEffect(() => {
    setValue(`items.${index}.total`, total);
  }, [index, total, setValue]);

  return (
    <div className="mb-4 grid grid-cols-9 gap-4 sm:grid-cols-12">
      <div className="col-span-9 sm:col-span-5">
        <Input
          label="Item Name"
          {...register(`items.${index}.name`)}
          error={errors.items?.[index]?.name?.message}
        />
      </div>
      <div className="col-span-2 justify-center">
        <Input
          className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          label="Qty."
          type="number"
          {...register(`items.${index}.quantity`, {
            valueAsNumber: true,
          })}
          error={errors.items?.[index]?.quantity?.message}
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
};
