"use client";

import React, { useState } from 'react';
import Sidebar from '@/app/student/components/Sidebar';
import Header from '@/app/student/components/Header';
import StatsCard from '@/app/student/components/StatsSection';
import AppointmentForm from '@/app/student/components/AppointmentForm';
import AppointmentList from '@/app/student/components/AppointmentList';

export default function Home() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', reason: 'Consultation', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', reason: 'Follow-up', time: '11:00 AM' },
    { id: 3, name: 'Mark Johnson', reason: 'Therapy Session', time: '12:00 PM' },
    { id: 4, name: 'Emily Davis', reason: 'Initial Consultation', time: '1:00 PM' },
    { id: 5, name: 'John Doe', reason: 'Consultation', time: '10:00 AM' },
    { id: 6, name: 'Jane Smith', reason: 'Follow-up', time: '11:00 AM' },
    { id: 7, name: 'Mark Johnson', reason: 'Therapy Session', time: '12:00 PM' },
    // { id: 8, name: 'Emily Davis', reason: 'Initial Consultation', time: '1:00 PM' },
  ]);

  const [showAllAppointments, setShowAllAppointments] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  // Function to handle appointment form submission
  const handleAppointmentSubmit = (data: { name: string; email: string; date: string; time: string }) => {
    const newAppointment = {
      id: appointments.length + 1,
      name: data.name,
      reason: 'New Appointment', 
      time: data.time,
    };
    setIsFormVisible(false); // Hide the form after submission
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <div className="shadow">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 w-full">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatsCard title="Total Booked Appointments" value={`${appointments.length}`} subtitle="Till Now" />
          <StatsCard title="Appointments Reports" value="3" subtitle="Till Now" />
          <StatsCard title="Upcoming Appointments" value={`${appointments.length - 3}`} subtitle="This Week" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Appointment Form */}
          <div className="bg-white rounded-lg shadow">
            <AppointmentForm onSubmit={handleAppointmentSubmit} />
          </div>

          {/* Appointment List */}
          <div>
            <AppointmentList
              appointments={appointments}
              showAllAppointments={showAllAppointments}
              setShowAllAppointments={setShowAllAppointments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
