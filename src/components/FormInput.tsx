import type { ReactNode } from "react";
import { Label } from "./ui/label.tsx";
import { Input } from "./ui/input.tsx";

type FormInputProps = {
  label: string;
  name: string;
  type: string;
  defautValue: string | undefined;
  placeholder: string;
};
const FormInput = ({
  label,
  name,
  type,
  defautValue,
  placeholder,
}: FormInputProps): ReactNode => {
  return (
    <div className="flex flex-col gap-1">
      <Label className="capitalize text-xl" htmlFor={name}>
        {label || name}
      </Label>
      <Input 
      id={name} 
      name={name} 
      type={type} 
      defaultValue={defautValue? defautValue:""}
      placeholder={placeholder}
      >
      </Input>
    </div>
  );
};
export default FormInput;
