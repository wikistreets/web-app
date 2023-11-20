"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Map } from "@/components/Forms/CreatePost/Map";

interface Props {
  onDismiss?: () => void;
  style?: string;
}

export const PostForm: React.FC<Props> = ({ onDismiss, style }: Props) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(1, { message: "Title must be at least 1 character" })
      .max(50, { message: "Title must be within 50 characters" }),
    description: z
      .string()
      .max(300, { message: "Description must be within 300 characters" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "w-full h-full space-y-6 p-4 mx-auto overflow-auto sm:max-w-md md:max-w-md xl:max-w-lg",
            style
          )}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{""}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Title"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-xs"
                    {...field}
                  />
                </FormControl>
                <FormDescription>{""}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{""}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add a description..."
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 text-xs"
                    {...field}
                  />
                </FormControl>
                <FormDescription>{""}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <figure className="rounded-2xl">{/* <Map></Map> */}</figure>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => onDismiss && onDismiss()}
            >
              Discard
            </Button>
            <Button type="submit" size="sm" className="text-white text-xs">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
