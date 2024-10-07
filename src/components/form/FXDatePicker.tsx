 
import { IInput } from "@/types";
import { DatePicker } from "@nextui-org/date-picker";
 
import { Controller } from "react-hook-form";

interface IProps extends IInput {}

export default function FXDatePicker({
  label,
  name,
  variant = "bordered",
}: IProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="   "
          label={label}
          variant={variant}
          {...fields}
        />
      )}
    />
  );
}
