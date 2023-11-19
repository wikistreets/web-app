"use client";

import { useState } from "react";
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
  onClose?: () => void;
  style?: string;
}

export const PostForm: React.FC<Props> = ({ onClose, style }: Props) => {
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
            "z-50 flex flex-col justify-center w-full h-full space-y-6 px-2 mx-auto overflow-y-auto",
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
                    placeholder="Title*"
                    className="resize-none text-xs"
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
                    className="focus-visible:ring-slate-400 text-xs"
                    {...field}
                  />
                </FormControl>
                <FormDescription>{""}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <figure className="rounded-2xl"></figure>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={onClose}
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
