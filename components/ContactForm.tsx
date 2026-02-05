'use client';

import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/state/schema/zodSchema';
import { z } from 'zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
const ContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      phone: '',
      message: '',
    },
  });

  const { handleSubmit } = form;

  const submitForm = (data: z.infer<typeof contactSchema>) => {
    console.log(data);
  };
  return (
    <div className="p-10 border-secondary/25 border-2 rounded-2xl">
      <Form {...form}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col sm:flex-row  gap-6 mb-6">
            <FormField
              name="firstname"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="lastname"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex  flex-col sm:flex-row gap-6 mb-6">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email Address</FormLabel>
                  <Input type="text" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Phone No</FormLabel>
                  <Input type="text" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <Textarea {...field}></Textarea>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button size="lg" className="mt-10">
            Submit Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
