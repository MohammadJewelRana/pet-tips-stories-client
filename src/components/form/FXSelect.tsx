import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
  // onChange?: (value: string) => void;
}

export default function FXSelect({
  options,
  name,
  label,
  variant = "underlined",
  disabled,
  // onChange
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="  text-[12px] text-gray-500 "
      isDisabled={disabled}
      label={label}
      size="sm"
      variant={variant}
      color="default"
      // onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <SelectItem key={option.key} value={option.key} className="py-1 px-2 text-sm">{option.label}</SelectItem>
      ))}
    </Select>
  );
}
