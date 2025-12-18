import { Input } from "@/components/ui/input";

export const BillFormSection = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      <legend className="heading-s-variant col-span-full mb-6 text-purple">
        Bill Form
      </legend>
      {/* Street Address */}
      <div className="col-span-2 sm:col-span-3">
        <Input label="Street Address" />
      </div>

      {/* City */}
      <div className="col-span-1">
        <Input label="City" />
      </div>

      {/* Post Code */}
      <div className="col-span-1">
        <Input label="Post Code" />
      </div>

      {/* Country */}
      <div className="col-span-2 sm:col-span-1">
        <Input label="Country" />
      </div>
    </fieldset>
  );
};
