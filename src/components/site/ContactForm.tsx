import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone number must be under 20 characters" })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must be under 100 characters" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please tell us about your requirement" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Client-side only: simulate submission and show confirmation.
    // In production, replace this with a server function call or email service.
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="panel-tile rounded-lg border border-border bg-card p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="grid h-16 w-16 place-items-center rounded-full bg-amber/15">
              <CheckCircle className="h-8 w-8 text-amber" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">Message sent</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Thank you for reaching out. We will review your requirement and get back to you within one working day.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-6 border-border hover:border-amber/60 hover:bg-amber/5 hover:text-amber"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="border-input bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-amber"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="name@company.com"
                            className="border-input bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-amber"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="border-input bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-amber"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            className="border-input bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-amber"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Requirement</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the part, material, tolerance and quantity you need."
                          rows={5}
                          className="border-input bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-amber"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="text-xs text-muted-foreground">
                  You can also email drawings directly to{" "}
                  <a
                    href="mailto:jayjalaramind@gmail.com"
                    className="text-amber underline-offset-2 hover:underline"
                  >
                    jayjalaramind@gmail.com
                  </a>
                  . PDF and STEP files are welcome.
                </p>

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-amber text-primary-foreground hover:bg-amber/90 sm:w-auto"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
