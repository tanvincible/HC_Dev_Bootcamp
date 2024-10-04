"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email('Invalid email address.'),
  date: z.string().nonempty('Date is required.'),
  time: z.string().nonempty('Time is required.'),
});
type FormData = z.infer<typeof formSchema>;

export default function AppointmentForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      date: '',
      time: '',
    },
  });

  const [showAllAppointments, setShowAllAppointments] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  return (
    <div className="bg-white p-5 rounded-lg">
            {/* Form Section */}
            <h2 className="text-lg font-semibold text-black mb-3 text-center">Book an Appointment</h2>
            <Button 
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full mb-4 text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              {isFormVisible ? "Cancel the application" : "Show Application"}
            </Button>
            {isFormVisible && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="text-black space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 transition">
                    Submit
                  </Button>
                </form>
              </Form>
            )}
          </div>
  );
}
