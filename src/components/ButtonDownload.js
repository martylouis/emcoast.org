const ButtonDownload = ({ link, text }) => (
  <a
    href={link}
    className="flex items-center justify-center w-full px-4 text-sm font-bold leading-none text-white bg-blue-500 rounded shadow-sm h-9 whitespace-nowrap hover:bg-blue-600"
    rel="noopener noreferrer"
    target="_blank"
    download
  >
    <div className="mr-1.5">
      <IconFileDownload />
    </div>
    {text}
  </a>
);

export default ButtonDownload;

function IconFileDownload(props) {
  const title = props.title || 'file download';

  return (
    <svg
      height="12"
      width="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M10.5,0H9V1h1.5a.5.5,0,0,1,.5.5V8H1V1.5A.5.5,0,0,1,1.5,1H3V0H1.5A1.5,1.5,0,0,0,0,1.5v9A1.5,1.5,0,0,0,1.5,12h9A1.5,1.5,0,0,0,12,10.5v-9A1.5,1.5,0,0,0,10.5,0Z"
          fill="currentColor"
        />
        <polygon points="6 7 9 3 7 3 7 0 5 0 5 3 3 3 6 7" />
      </g>
    </svg>
  );
}

export { IconFileDownload };
