/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const ZoomMeeting = ({
  day, time, fileName, updated,
}) => (
  <div className="w-auto px-8 py-6 mx-auto my-4 text-center bg-white border border-gray-300 rounded shadow-2xl">
    <div className="text-xl font-medium leading-none text-teal-600 uppercase">{day}</div>
    <div className="mt-2 text-3xl font-extrabold leading-none tracking-tighter text-teal-800">{time}</div>
    {fileName && updated
      ? (
        <div>
          <a href={`https://static.martylouis.com/emcoast/${updated}--${fileName}.pdf`} download className="flex items-center justify-center h-10 px-4 mt-4 text-sm font-bold leading-none text-white bg-teal-600 rounded hover:bg-teal-700" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 -ml-1 fill-current" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            Download Schedule
          </a>
          <div className="mt-2 text-xs text-gray-600">
            <strong>Updated: </strong>
            <time dateTime={updated}>{format(parseISO(updated), 'LLL d, yyyy')}</time>
          </div>
        </div>
      )
      : (
        <div disabled className="flex items-center justify-center p-1 mt-4 text-sm font-bold text-white bg-teal-600 rounded opacity-50 cursor-not-allowed">
          Coming Soon...
        </div>
      )}
  </div>
);

export default ZoomMeeting;

ZoomMeeting.propTypes = {
  day: PropTypes.string,
  time: PropTypes.string,
  updated: PropTypes.string,
  fileName: PropTypes.string,
};
