// "use client"

// import React, { useState } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import Image from 'next/image'; // Add this import
// import Link from 'next/link';
// // Define the validation schema using Zod
// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: 'Name must be at least 2 characters.',
//   }),
//   email: z.string().email('Invalid email address.'),
//   date: z.string().nonempty('Date is required.'),
//   time: z.string().nonempty('Time is required.'),
// });

// type FormData = z.infer<typeof formSchema>;

// const initialAppointments = [
//   { id: 1, name: "M.J. Mical", reason: "Health Checkup", time: "On Going" },
//   { id: 2, name: "Sanath Deo", reason: "Health Checkup", time: "12:30 PM" },
//   { id: 3, name: "Loeara Phanj", reason: "Report", time: "01:00 PM" },
//   { id: 4, name: "Komola Haris", reason: "Common Cold", time: "01:30 PM" },
//   { id: 5, name: "Komola Haris", reason: "Common Cold", time: "01:30 PM" },
//   { id: 6, name: "Komola Haris", reason: "Common Cold", time: "01:30 PM" },
//   { id: 7, name: "Komola Haris", reason: "Common Cold", time: "01:30 PM" },
//   // Add more appointments as needed
// ];

// export default function Home() {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [showAllAppointments, setShowAllAppointments] = useState(false);
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       date: '',
//       time: '',
//     },
//   });

  // const onSubmit = (data: FormData) => {
  //   console.log('Appointment booked:', data);
  //   setIsFormVisible(false); // Hide the form after submission
  //   form.reset(); // Reset the form
  // };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//     <div className="min-h-screen bg-white flex flex-col items-center w-64 p-6">
//       {/* Profile Section */}
//       <div className="flex flex-col text-black items-center mb-6">
//         <Image
//           className="w-24 h-24 rounded-full mb-4"
//           src="/a" // Replace with actual image path
//           alt="Profile Image"
//           width={96}
//           height={96}
//         />
//         <h2 className="text-lg font-bold text-blue-600">Student Name</h2>
//         <p className="text-sm text-black">Student Designation</p>
//       </div>

//       {/* Navigation Links */}
//       <nav className="w-full">
//         <ul className="flex flex-col px-6 gap-2 space-y-4">
//           <li>
//             <Link href="#" className="flex items-center text-black font-semibold">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v12M15 3v12M3 15h18" />
//               </svg>
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center text-black hover:text-blue-600 transition">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//               Booked Appointment
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center text-black hover:text-blue-600 transition">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9m-9 9v-6m0-6v6" />
//               </svg>
//               Past Appointments Page
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center text-black hover:text-blue-600 transition">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM2 20c0-4 8-4 8-4h4c0 0 8 0 8 4v2H2v-2z"
//                 />
//               </svg>
//               Profile
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center text-black hover:text-blue-600 transition">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
//               </svg>
//               Settings
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center text-black hover:text-blue-600 transition">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
      

//       {/* Main Content */}
//       <main className="flex-1 p-5">
//         {/* Header */}
//         <header className="flex justify-between items-center p-5 mb-5 bg-gray-200 rounded-xl">
//           <h1 className="text-2xl font-bold text-black">Dashboard</h1>
//           <div className="flex items-center space-x-3">
//             {/* <input
//               type="search"
//               placeholder="Search"
//               className="border p-2 rounded"
//             /> */}
//             <button className="p-2 text-2xl bg-gray-200 rounded-full">🔔</button>
//             <button className="p-2 text-2xl bg-gray-200 rounded-full">✉️</button>
//           </div>
//         </header>

//         {/* Stats Section */}
//         <section className="grid grid-cols-3 gap-4 mb-5">
//           <div className="bg-white p-5 rounded-lg shadow">
//             <h2 className="text-black text-sm">Total Booked Appointments</h2>
//             <p className="text-3xl text-black font-bold">2000+</p>
//             <p className="text-black text-xs">Till Today</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow">
//             <h2 className="text-black text-sm">Total Reports</h2>
//             <p className="text-3xl text-black font-bold">068</p>
//             <p className="text-black text-xs">Till Now</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow">
//             <h2 className="text-black text-sm">Upcoming Appointment</h2>
//             <p className="text-3xl text-black font-bold">085</p>
//             <p className="text-black text-xs">21 Dec-2021</p>
//           </div>
//         </section>
//               {/* change area */}
//         {/* Booking button and Appointments */}
//         <section className="grid grid-cols-2 gap-4">
          // <div className="bg-white p-5 rounded-lg shadow">
          //   {/* Form Section */}
          //   <h2 className="text-lg font-semibold text-black mb-3 text-center">Book an Appointment</h2>
          //   <Button 
          //     onClick={() => setIsFormVisible(!isFormVisible)}
          //     className="w-full mb-4 text-black bg-blue-600 hover:bg-blue-700 transition"
          //   >
          //     {isFormVisible ? "Cancel the application" : "Show Application"}
          //   </Button>
          //   {isFormVisible && (
          //     <Form {...form}>
          //       <form onSubmit={form.handleSubmit(onSubmit)} className="text-black space-y-4">
          //         <FormField
          //           control={form.control}
          //           name="name"
          //           render={({ field }) => (
          //             <FormItem>
          //               <FormLabel>Name</FormLabel>
          //               <FormControl>
          //                 <Input placeholder="Your Name" {...field} />
          //               </FormControl>
          //               <FormMessage />
          //             </FormItem>
          //           )}
          //         />
          //         <FormField
          //           control={form.control}
          //           name="email"
          //           render={({ field }) => (
          //             <FormItem>
          //               <FormLabel>Email</FormLabel>
          //               <FormControl>
          //                 <Input type="email" placeholder="example@example.com" {...field} />
          //               </FormControl>
          //               <FormMessage />
          //             </FormItem>
          //           )}
          //         />
          //         <FormField
          //           control={form.control}
          //           name="date"
          //           render={({ field }) => (
          //             <FormItem>
          //               <FormLabel>Date</FormLabel>
          //               <FormControl>
          //                 <Input type="date" {...field} />
          //               </FormControl>
          //               <FormMessage />
          //             </FormItem>
          //           )}
          //         />
          //         <FormField
          //           control={form.control}
          //           name="time"
          //           render={({ field }) => (
          //             <FormItem>
          //               <FormLabel>Time</FormLabel>
          //               <FormControl>
          //                 <Input type="time" {...field} />
          //               </FormControl>
          //               <FormMessage />
          //             </FormItem>
          //           )}
          //         />
          //         <Button type="submit" className="bg-green-600 hover:bg-green-700 transition">
          //           Submit
          //         </Button>
          //       </form>
          //     </Form>
          //   )}
          // </div>

//           {/* Today's Appointments */}
//           <div className="bg-white p-5 rounded-lg shadow">
//             <h2 className="text-lg text-black font-semibold mb-3">Past Appointments</h2>
//             <ul>
//               {initialAppointments.slice(0, showAllAppointments ? initialAppointments.length : 3).map(appointment => (
//                 <li key={appointment.id} className="flex text-black justify-between items-center mb-3">
//                   <div>
//                     <p className="font-bold text-black">{appointment.name}</p>
//                     <p className="text-black text-sm">{appointment.reason}</p>
//                   </div>
//                   <span className="text-blue-500">{appointment.time}</span>
//                 </li>
//               ))}
//             </ul>
//             <button 
//               className="text-blue-500 mt-3" 
//               onClick={() => setShowAllAppointments(!showAllAppointments)}
//             >
//               {showAllAppointments ? "Show Less" : "See All"}
//             </button>
//           </div>
//         </section>
//               {/* end of main component */}
//         <section>
//           <div>

//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
import React from 'react';
import Home from '@/app/student/components/Home';

export default function Page() {
  return <Home />;
}
