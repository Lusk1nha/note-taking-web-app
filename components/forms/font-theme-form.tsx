import {
  BeautyRadioGroup,
  BeautyRadioOption,
} from "../inputs/beauty-radio-group";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import IconFontSansSerif from "../icons/icon-font-sans-serif";
import IconFontSerif from "../icons/icon-font-serif";
import IconFontMonospace from "../icons/icon-font-monospace";
import { useFontStore } from "@/shared/stores/font-store";

const fontThemes: BeautyRadioOption[] = [
  {
    icon: IconFontSansSerif,
    label: "Sans-Serif",
    description: "Clean and modern, easy to read.",
    value: "sans-serif",
  },
  {
    icon: IconFontSerif,
    label: "Serif",
    description: "Classic and elegant for a timeless feel.",
    value: "serif",
  },
  {
    icon: IconFontMonospace,
    label: "Monospace",
    value: "mono",
    description: "Code-like, great for a technical vibe.",
  },
];

const FontThemeFormSchema = z.object({
  theme: z.enum(["sans-serif", "serif", "mono"], {
    required_error: "Please select a font theme",
  }),
});

export type FontThemeFormValues = z.infer<typeof FontThemeFormSchema>;

export function FontThemeForm() {
  const { font, setFont } = useFontStore();
  const { toast } = useToast();

  const form = useForm<FontThemeFormValues>({
    resolver: zodResolver(FontThemeFormSchema),
    defaultValues: {
      theme: font as FontThemeFormValues["theme"],
    },
  });

  const { handleSubmit } = form;

  async function handleThemeChange(value: FontThemeFormValues): Promise<void> {
    const { theme } = value;
    setFont(theme);
  }

  const { mutate } = useMutation({
    mutationFn: handleThemeChange,
    onSuccess() {
      toast({
        title: "Font Updated",
        description: "Your font has been updated successfully",
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
                  options={fontThemes}
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
