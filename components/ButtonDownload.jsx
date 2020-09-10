import Timestamp from './Timestamp';

const DownloadButton = ({ link, text, updated }) => (
  <div>
    <a
      href={link}
      className="inline-flex items-center justify-center h-10 px-4 mt-4 text-sm font-bold leading-none text-white whitespace-no-wrap bg-teal-600 rounded hover:bg-teal-700"
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 mr-1 -ml-1 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      {text}
    </a>
    <Timestamp date={updated} />
  </div>
);

export default DownloadButton;
