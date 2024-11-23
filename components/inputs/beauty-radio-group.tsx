import { cn } from "@/lib/utils";
import { FormControl, FormItem, FormLabel } from "../ui/form";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useEffect,
  useState,
} from "react";

export type BeautyRadioOption = {
  value: string;
  label: string;
  description?: string;
  icon: MemoExoticComponent<
    ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
    >
  >;
};

interface IBeautyRadioGroupProps {
  name: string;
  defaultValue?: string;
  options: BeautyRadioOption[];

  value: string;
  onChange?: (value: string) => void;
}

export function BeautyRadioGroup(props: Readonly<IBeautyRadioGroupProps>) {
  const { value, onChange, defaultValue, options } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <RadioGroup
      onValueChange={onChange}
      className="gap-200"
      defaultValue={defaultValue}
      value={value}
    >
      {options.map((option) => (
        <BeautyItem
          key={option.value}
          isChecked={option.value === value}
          {...option}
        />
      ))}
    </RadioGroup>
  );
}

interface IBeautyItemProps extends BeautyRadioOption {
  isChecked: boolean;
}

function BeautyItem(props: Readonly<IBeautyItemProps>) {
  const { value, label, description, icon: Icon, isChecked } = props;

  return (
    <FormItem>
      <FormControl>
        <div className="w-full flex items-center">
          <RadioGroupItem value={value} id={value} className="peer sr-only" />
          <FormLabel
            htmlFor={value}
            className={cn(
              "w-full h-[72px] p-200 rounded-12 border border-border flex items-center justify-between cursor-pointer",
              isChecked && "bg-appNeutral"
            )}
          >
            <div className="flex items-center gap-200">
              <div className="bg-appRadioIcon w-10 h-10 flex items-center justify-center border border-border rounded-12">
                <Icon className="w-6 h-6" />
              </div>

              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-appTextPrimary">
                  {label}
                </p>
                {description && (
                  <p className="text-xs font-normal text-appTextSecondary">
                    {description}
                  </p>
                )}
              </div>
            </div>

            <div
              className={cn(
                "bg-appRadioIcon w-4 h-4 rounded-full border-2 border-border",
                isChecked && "border-appPrimary border-4"
              )}
            />
          </FormLabel>
        </div>
      </FormControl>
    </FormItem>
  );
}
