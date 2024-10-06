import React from 'react';

interface StudentProfile {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

const studentData: StudentProfile = {
  name: 'John Doe',
  designation: 'Student',
  email: 'john.doe@example.com',
  phone: '+1 (234) 567-8901',
};

const Profile: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
        <div>
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="space-y-4">
        <div>
            
          <span className="font-bold">Name: </span>
          <span>{studentData.name}</span>
        </div>
        <div>
          <span className="font-bold">Designation: </span>
          <span>{studentData.designation}</span>
        </div>
        <div>
          <span className="font-bold">Email: </span>
          <span>{studentData.email}</span>
        </div>
        <div>
          <span className="font-bold">Phone: </span>
          <span>{studentData.phone}</span>
        </div>
        </div>
      </div>
        <h3 className='font-semibold text-xl py-5' >To edit any of the above details Please Email at hc@iitk.ac.in</h3>
    </div>
  );
};

export default Profile;
