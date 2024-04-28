"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
  query: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function SearchForm() {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    push(`/courses?query=${data.query}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex items-center mt-10"
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="p-8 rounded-r-none focus:outline-none focus-visible:ring-0 text-lg px-20"
                  placeholder="What do you want to learn"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="py-8 rounded-l-none text-lg" type="submit">
          Search Course
        </Button>
      </form>
      <FormMessage />
    </Form>
  );
}
