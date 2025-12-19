import { Input } from "@/components/ui/input";

export const BillToSection = () => {
  return (
    <fieldset className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      <legend className="heading-s-variant mb-6 text-purple">Bill To</legend>
      <div className="col-span-2 sm:col-span-3">
        {/* Name */}
        <Input label="Client’s Name" />
      </div>

      {/* Email */}
      <div className="col-span-2 sm:col-span-3">
        <Input label="Client’s Email" />
      </div>

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
