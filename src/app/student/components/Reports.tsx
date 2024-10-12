import React from 'react';

interface Report {
  id: number;
  name: string;
  type: string;
  docName: string;
  date: string;
}

interface ReportsProps {
  Reportdata: Report[];
}

export default function Reports({ Reportdata }: ReportsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reports</h2>
      <ul className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-4">
        {Reportdata.map(report => (
          <li key={report.id} className="flex justify-between items-center p-2 border-b border-gray-300 dark:border-gray-600">
            <div className="flex flex-col flex-grow">
              <p className="font-bold text-gray-800 dark:text-gray-200">No. {report.id}</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">{report.name}</p>
            </div>
            <div className='flex flex-col w-max flex-grow'>
              <p className="text-sm text-gray-500 dark:text-gray-400">Type: {report.type}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Document: {report.docName}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">{report.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
