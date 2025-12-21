import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SimpleDatePicker } from "@/components/ui/simpleDatePicker";

export const PaymentTermsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
      {/* Invoice Date */}
      <div className="col-span-2 w-full sm:col-span-1">
        <SimpleDatePicker label="Issue Date" />
      </div>

      {/* Payment Terms */}
      <div className="col-span-2 sm:col-span-1">
        <Select label="Payment Terms">
          <option value="Net 1 Day">Net 1 Day</option>
          <option value="Net 7 Days">Net 7 Days</option>
          <option value="Net 14 Days">Net 14 Days</option>
          <option value="Net 30 Days">Net 30 Days</option>
        </Select>
      </div>

      {/* Project Description */}
      <div className="col-span-2">
        <Input label="Project Description" />
      </div>
    </div>
  );
};
