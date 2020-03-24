import React from 'react';

const ZoomMeeting = ({ day, time }) => (
  <div className="w-56 py-6 mx-auto my-4 text-center bg-white border border-gray-300 rounded shadow-lg">
    <div className="text-xl font-medium text-teal-500 uppercase">{day}</div>
    <div className="mt-1 text-3xl font-extrabold leading-none tracking-tighter text-teal-800">{time}</div>
  </div>
);

export default ZoomMeeting;
