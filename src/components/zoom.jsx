/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import DownloadButton from './downloadButton';

const ZoomMeeting = ({
  day, time, fileName, updated,
}) => (
  <div className="w-auto px-8 py-6 mx-auto my-4 text-center bg-white border border-gray-300 rounded shadow-2xl">
    <div className="text-xl font-medium leading-none text-teal-600 uppercase">{day}</div>
    <div className="mt-2 text-3xl font-extrabold leading-none tracking-tighter text-teal-800">{time}</div>
    {fileName && updated
      ? (
        <DownloadButton
          link={`https://static.martylouis.com/emcoast/${updated}--${fileName}.pdf`}
          text="Download Schedule"
          updated={updated}
        />
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
