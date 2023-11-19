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
import {
  faFileArrowUp,
  faImage,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Bubble } from "@/components/Bubble/Bubble";

interface Props {
  onDismiss?: () => void;
  style?: string;
}

export const MapForm: React.FC<Props> = ({ onDismiss, style }: Props) => {
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [invitedCollaborators, setInvitedCollaborators] = useState<string[]>(
    []
  );

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
    customImage: z.string().refine(
      (data) => {
        // Add custom validation logic for the file upload field
        if (form.getValues("mapType") === "customImageMap") {
          return !!data; // Return true if the file path or URL is provided
        }
        return true; // Return true if the mapType is not 'customImageMap'
      },
      { message: "Please upload an image for Custom Image Map" }
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      privacy: "public",
      collaborators: "",
      mapType: "geographicMap",
      customImage: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const handleInvite = () => {
    const collaborators = form.getValues("collaborators");
    if (collaborators) {
      setInvitedCollaborators((prevCollaborators) => [
        ...prevCollaborators,
        collaborators,
      ]);
      form.setValue("collaborators", ""); // Clear the input after inviting
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full h-full space-y-6 p-4 mx-auto overflow-auto sm:max-w-md md:max-w-md xl:max-w-lg ${style}`}
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
                  <>
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
                        onClick={handleInvite}
                        type="button"
                        variant="secondary"
                        className="rounded-tl-none rounded-bl-none border-2 border-secondary text-xs"
                      >
                        Invite
                      </Button>
                    </div>
                    {/* show added collaborators */}
                    <div className="flex flex-wrap gap-2">
                      {invitedCollaborators.map((collaborator, idx) => {
                        return (
                          <Bubble
                            key={idx}
                            bgColor="bg-secondary"
                            textColor="text-primary"
                            collaborator={collaborator}
                            onDelete={() => {
                              setInvitedCollaborators((prev) => [
                                ...prev.filter((c) => c !== collaborator),
                              ]);
                            }}
                          ></Bubble>
                        );
                      })}
                    </div>
                  </>
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
                <FormField
                  control={form.control}
                  name="mapType"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setShowUploadImage(value === "customImageMap");
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full h-8 text-2xs mt-2 focus:ring-0 focus:ring-offset-0 placeholder:text-[2px]">
                            <SelectValue placeholder="Geographic map" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem
                            value="geographicMap"
                            className="text-2xs"
                          >
                            Geographic Map
                          </SelectItem>
                          <SelectItem
                            value="customImageMap"
                            className="text-2xs"
                          >
                            Custom Image Map
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                {showUploadImage && (
                  <FormField
                    control={form.control}
                    name="customImage"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="my-4 flex flex-col justify-center items-center gap-2">
                          <Button
                            type="button"
                            variant={"outline"}
                            className="flex flex-col gap-1 w-full py-14 text-2xs text-blue-primary border-dashed"
                            onClick={() => {
                              // Handle image upload logic
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faImage}
                              size="3x"
                              className="text-tertiary"
                            />
                            <div className="flex flex-col gap-1">
                              <span>Upload an image</span>
                              <span className="text-secondary font-light">
                                JPG, JPEG, PNG up to 10MB
                              </span>
                            </div>
                          </Button>
                          <span className="text-secondary font-light text-2xs">
                            or
                          </span>
                          <Button
                            type="button"
                            variant={"secondary"}
                            className="h-8 px-6 bg-light-gray rounded-2xl text-2xs"
                            onClick={() => {
                              // Handle image upload logic
                            }}
                          >
                            Take Photo
                          </Button>
                        </div>
                        {/* Additional file input or drop zone for image upload */}
                        {/* Handle file upload logic using field.onChange or other event handlers */}
                      </FormItem>
                    )}
                  />
                )}
              </AccordionContent>

              <AccordionContent className="text-xs text-left">
                <span>Import GeoJSON</span>
                <FormItem className="w-full">
                  <div className="mt-2 flex flex-col justify-center items-center gap-2">
                    <Button
                      type="button"
                      variant={"outline"}
                      className="flex flex-col gap-3 w-full py-14 text-2xs text-blue-primary border-dashed"
                      onClick={() => {
                        // Handle image upload logic
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faFileArrowUp}
                        size="3x"
                        className="text-tertiary"
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex">
                          <span>Click to add a file</span>
                          <span className="ml-1 text-secondary">
                            or drag and drop
                          </span>
                        </div>

                        <span className="text-secondary font-light">
                          up to 10MB
                        </span>
                      </div>
                    </Button>
                  </div>
                  {/* Additional file input or drop zone for image upload */}
                  {/* Handle file upload logic using field.onChange or other event handlers */}
                </FormItem>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
