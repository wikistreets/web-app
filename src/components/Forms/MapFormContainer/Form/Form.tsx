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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const MapForm = () => {
  const formSchema = z.object({
    title: z
      .string()
      .min(1, { message: "Title must be at least 1 character" })
      .max(50, { message: "Title must be within 50 characters" }),
    description: z
      .string()
      .max(300, { message: "Description must be within 300 characters" }),
    privacy: z.enum(["private", "public"]),
    collaborators: z.string().min(1),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      privacy: "public",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 my-4 mx-2 lg:mx-4 xl:mx-6 2xl:mx-8"
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
                    className="resize-none "
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
                    className="focus-visible:ring-slate-400"
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
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                  <FormLabel>Who can see this map?</FormLabel>
                  <FormDescription>
                    Choose who you want to share with
                  </FormDescription>
                </div>

                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="public" />
                      </FormControl>
                      <div className="flex flex-col gap-1">
                        <FormLabel className="font-normal">Public</FormLabel>
                        <FormDescription>
                          Anyone can view and search this map
                        </FormDescription>
                      </div>
                    </FormItem>

                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="private" />
                      </FormControl>
                      <div className="flex flex-col gap-1">
                        <FormLabel className="font-normal">Private</FormLabel>
                        <FormDescription>
                          Only your collaboraters can view this map
                        </FormDescription>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collaborators"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invite collaborators</FormLabel>
                <FormControl>
                  <div className="relative flex w-full items-center">
                    <Input
                      type="username"
                      placeholder="Search by username"
                      className="pl-9 rounded-tr-none rounded-br-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3  
                    flex items-center
                    pointer-events-none"
                    >
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        size="sm"
                        className="text-slate-400"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="secondary"
                      className="rounded-tl-none rounded-bl-none border-2 border-secondary"
                    >
                      Invite
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">
                Advanced Settings
              </AccordionTrigger>
              <AccordionContent>Choose a style</AccordionContent>
              <AccordionContent>Import a file</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" className="">
              Discard
            </Button>
            <Button type="submit" className="text-white">
              Create
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default MapForm;
