
import { IInput } from "@/types";
import { Select, SelectItem } from "@nextui-org/select";
 
import { useFormContext } from "react-hook-form";
 

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

export default function FXSelect({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className=" "
      isDisabled={disabled}
      label={label}
      variant={variant}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}