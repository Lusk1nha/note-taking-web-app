"use client";

import IconMoon from "../icons/icon-moon";
import IconSun from "../icons/icon-sun";
import IconSystemTheme from "../icons/icon-system-theme";
import {
  BeautyRadioGroup,
  BeautyRadioOption,
} from "../inputs/beauty-radio-group";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const colorThemes: BeautyRadioOption[] = [
  {
    icon: IconSun,
    label: "Light Mode",
    description: "Pick a clean and classic light theme",
    value: "light",
  },
  {
    icon: IconMoon,
    label: "Dark Mode",
    description: "Select a sleek and modern dark theme",
    value: "dark",
  },
  {
    icon: IconSystemTheme,
    label: "System",
    value: "system",
    description: "Adapts to your device’s theme",
  },
];

const ColorThemeFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a color theme",
  }),
});

export type ColorThemeFormValues = z.infer<typeof ColorThemeFormSchema>;

export function ColorThemeForm() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const form = useForm<ColorThemeFormValues>({
    resolver: zodResolver(ColorThemeFormSchema),
    defaultValues: {
      theme: theme as ColorThemeFormValues["theme"],
    },
  });

  const { handleSubmit } = form;

  async function handleThemeChange(value: ColorThemeFormValues): Promise<void> {
    const { theme } = value;
    setTheme(theme);
  }

  const { mutate } = useMutation({
    mutationFn: handleThemeChange,
    onSuccess() {
      toast({
        title: "Theme Updated",
        description: "Your theme has been updated successfully",
        variant: "default",
      });
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <BeautyRadioGroup
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  options={colorThemes}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="w-full flex justify-end">
          <Button
            type="submit"
            className="bg-appPrimary hover:bg-appPrimary text-white hover rounded-8"
          >
            Apply Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}
