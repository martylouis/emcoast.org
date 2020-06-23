/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const DownloadButton = ({
  link, text, updated,
}) => (
  <div>
    <a
      href={link}
      className="flex items-center justify-center h-10 px-4 mt-4 text-sm font-bold leading-none text-white bg-teal-600 rounded hover:bg-teal-700"
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 -ml-1 fill-current" viewBox="0 0 24 24">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      {text}
    </a>
    <div className="mt-2 text-xs text-gray-600">
      <strong>Updated: </strong>
      <time dateTime={updated}>{format(parseISO(updated), 'LLL d, yyyy')}</time>
    </div>
  </div>
);

DownloadButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  updated: PropTypes.string,
};

export default DownloadButton;
