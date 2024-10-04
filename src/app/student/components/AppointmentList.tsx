"use client";

type Appointment = {
  id: number;
  name: string;
  reason: string;
  time: string;
};

export default function AppointmentList({
  appointments,
  showAllAppointments,
  setShowAllAppointments,
}: {
  appointments: Appointment[];
  showAllAppointments: boolean;
  setShowAllAppointments: (value: boolean) => void;
}) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-lg text-black font-semibold mb-3">Today's Appointments</h2>
      <ul>
        {appointments.slice(0, showAllAppointments ? appointments.length : 3).map(appointment => (
          <li key={appointment.id} className="flex text-black justify-between items-center mb-3">
            <div>
              <p className="font-bold text-black">{appointment.name}</p>
              <p className="text-black text-sm">{appointment.reason}</p>
            </div>
            <span className="text-blue-500">{appointment.time}</span>
          </li>
        ))}
      </ul>
      <button 
        className="text-blue-500 mt-3" 
        onClick={() => setShowAllAppointments(!showAllAppointments)}
      >
        {showAllAppointments ? "Show Less" : "See All"}
      </button>
    </div>
  );
}
