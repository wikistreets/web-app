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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose?: () => void;
  style?: string;
}

export const MapForm: React.FC<Props> = ({ onClose, style }: Props) => {
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
    mapType: z.string(),
  });

  // 1. Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      privacy: "public",
      collaborators: "",
      mapType: "geographicMap",
    },
  });

  // 2. Define a submit handler
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
          className={`flex flex-col justify-center w-full h-full space-y-6 mx-auto ${style}`}
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

          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex flex-col space-y-1 justify-center items-start">
                  <FormLabel className="text-xs">
                    Who can see this map?
                  </FormLabel>
                  <FormDescription className="text-xs">
                    Choose who you want to share with
                  </FormDescription>
                </div>

                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-1"
                  >
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="public" />
                      </FormControl>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <FormLabel className="font-normal text-xs">
                          Public
                        </FormLabel>
                        <FormDescription className="text-xs">
                          Anyone can view and search this map
                        </FormDescription>
                      </div>
                    </FormItem>

                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="private" />
                      </FormControl>
                      <div className="flex flex-col gap-1 justify-center items-start">
                        <FormLabel className="font-normal text-xs">
                          Private
                        </FormLabel>
                        <FormDescription className="text-xs">
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
              <FormItem className="flex flex-col justify-center items-start">
                <FormLabel className="text-xs">Invite collaborators</FormLabel>
                <FormControl>
                  <div className="relative flex w-full items-center">
                    <Input
                      type="username"
                      placeholder="Search by username"
                      className="text-xs pl-9 rounded-tr-none rounded-br-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                      className="rounded-tl-none rounded-bl-none border-2 border-secondary text-xs"
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
            <AccordionItem value="item-1" className="w-full">
              <AccordionTrigger className="text-xs">
                Advanced Settings
              </AccordionTrigger>

              <AccordionContent className="text-xs pt-4 text-start">
                <span>Choose a style</span>
                {/* FORM STARTS */}
                <FormField
                  control={form.control}
                  name="mapType"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full h-8 text-[10px] mt-2 focus:ring-0 focus:ring-offset-0 placeholder:text-[2px]">
                            <SelectValue placeholder="Geographic map" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem
                            value="geographicMap"
                            className="text-[10px]"
                          >
                            Geographic Map
                          </SelectItem>
                          <SelectItem
                            value="customImageMap"
                            className="text-[10px]"
                          >
                            Custom Image Map
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                {/* FORM ENDS */}
              </AccordionContent>

              <AccordionContent className="text-xs">
                <div className="flex justify-between items-center">
                  Import a file
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-16 h-6 text-[10px] bg-slate-100"
                  >
                    Select
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
