"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 flex flex-col items-center w-64 p-6">
      {/* Profile Section */}
      <div className="flex flex-col text-black dark:text-white items-center mb-6">
        <Image
          className="w-14 h-14 text-black rounded-full mb-4"
          src="/favicon.ico" // Replace with actual image path
          alt="Profile Image"
          width={26}
          height={26}
        />
        <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">Student Name</h2>
        <p className="text-sm text-black dark:text-gray-300">Student Designation</p>
      </div>

      {/* Navigation Links */}
      <nav className="w-full">
        <ul className="flex flex-col px-6 gap-2 space-y-4">
          {[
            { name: 'Dashboard', icon: 'M3 3h18M9 3v12M15 3v12M3 15h18', href: '#' },
            { name: 'Booked Appointment', icon: 'M5 12h14M12 5l7 7-7 7', href: '#' },
            { name: 'Past Appointments Page', icon: 'M3 12l9-9 9 9m-9 9v-6m0-6v6', href: '#' },
            { name: 'Profile', icon: 'M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM2 20c0-4 8-4 8-4h4c0 0 8 0 8 4v2H2v-2z', href: '#' },
            { name: 'Settings', icon: 'M12 8v8m4-4H8', href: '#' },
            { name: 'Logout', icon: 'M6 18L18 6M6 6l12 12', href: '#' },
          ].map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="flex items-center text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                </svg>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
