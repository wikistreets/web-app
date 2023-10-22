"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";

import Link from "next/link";
import Logo from "@/components/Header/Logo";
import OrDivider from "./OrDivider";
import SocialLogIn from "./SocialLogIn";
import FormBtn from "./Button";
import SupportingQuestion from "./SupportingQuestion";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export const SignUpForm: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
      <div className="flex flex-col gap-12 lg:gap-10">
        <div className="hidden sm:block w-12 h-12">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <h1 className="font-dm-sans tracking-wide">Get started</h1>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-8 space-y-6 lg:space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Email address</FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Password</FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <OrDivider />
          <SocialLogIn />
          <FormBtn type="Sign up" />
          <SupportingQuestion
            ask="Already have an account?"
            answer="Log in now"
          />
        </form>
      </Form>
    </>
  );
};

export default SignUpForm;
