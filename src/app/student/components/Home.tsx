"use client";

import React, { useState } from 'react';
import Sidebar from '@/app/student/components/Sidebar';
import { SiteHeader } from '@/components/ui/siteheader';
import StatsCard from '@/app/student/components/StatsSection';
import AppointmentForm from '@/app/student/components/AppointmentForm';
import AppointmentList from '@/app/student/components/AppointmentList';
import Reports from './Reports';
import Profile from './Profile';

export default function Home() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', reason: 'Consultation', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', reason: 'Follow-up', time: '11:00 AM' },
    { id: 3, name: 'Mark Johnson', reason: 'Therapy Session', time: '12:00 PM' },
    { id: 4, name: 'Emily Davis', reason: 'Initial Consultation', time: '1:00 PM' },
    { id: 1, name: 'John Doe', reason: 'Consultation', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', reason: 'Follow-up', time: '11:00 AM' },
    { id: 3, name: 'Mark Johnson', reason: 'Therapy Session', time: '12:00 PM' },
    { id: 4, name: 'Emily Davis', reason: 'Initial Consultation', time: '1:00 PM' },
  ]);
  const [selectedView, setSelectedView] = useState('Dashboard');
  
  const reportData = [
    { id: 1, name: 'Monthly Summary', date: '2024-09-30', docName: 'monthly_summary.pdf', type: 'Summary' },
    { id: 2, name: 'Weekly Overview', date: '2024-10-06', docName: 'weekly_overview.pdf', type: 'Overview' },
    { id: 3, name: 'Client Feedback', date: '2024-09-28', docName: 'client_feedback.pdf', type: 'Feedback' },
  ];

  const [showAllAppointments, setShowAllAppointments] = useState(false);

  const handleAppointmentSubmit = (data: { name: any; time: any; }) => {
    const newAppointment = {
      id: appointments.length + 1,
      name: data.name,
      reason: 'New Appointment', 
      time: data.time,
    };
    setAppointments([...appointments, newAppointment]);
  };

  const renderContent = () => {
    switch (selectedView) {
      case 'Booked Appointment':
        return <AppointmentList appointments={appointments}
        showAllAppointments={showAllAppointments} 
        setShowAllAppointments={setShowAllAppointments} />;
      case 'Reports':
        return <Reports Reportdata={reportData} />;
      case 'Profile':
        return <Profile/>;
      case 'Settings':
        return <p>Not yet added</p> ;
      case 'Dashboard':
      default:
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Appointment Form */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AppointmentForm onSubmit={handleAppointmentSubmit} />
              </div>
              {/* Appointment List */}
              <AppointmentList 
                appointments={appointments} 
                showAllAppointments={showAllAppointments} 
                setShowAllAppointments={setShowAllAppointments} 
              />
            </div>
            {/* Reports Section */}
            <div className='mt-10'>
              <Reports Reportdata={reportData} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <div className="shadow dark:bg-gray-800">
        <Sidebar onSelect={setSelectedView} />
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 w-full text-black dark:text-white flex flex-col">
        <SiteHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-5">
          <StatsCard title="Total Booked Appointments" value={`${appointments.length}`} subtitle="Till Now" />
          <StatsCard title="Appointments Reports" value="3" subtitle="Till Now" />
          <StatsCard title="Upcoming Appointments" value={`${appointments.length - 3}`} subtitle="This Week" />
        </div>

        {/* Render the selected content */}
        <div className='mt-10'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
