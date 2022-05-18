export default function Alert({ data, children }) {
  const { display, title, text } = data;
  return display ? (
    <div className="flex-row items-center p-4 text-center text-gray-900 border-2 border-orange-200 rounded-lg bg-orange-50 sm:text-left sm:flex">
      <div className="flex-shrink-0 text-orange-500">
        <IconWarningSign />
      </div>
      <div>
        <p className="font-bold sm:mt-0">{title}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  ) : (
    ''
  );
}

function IconWarningSign(props) {
  const title = props.title || 'warning sign';

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mx-auto my-1 sm:ml-0 sm:mr-3"
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M23.641,18.485,14.732,1.643a3.093,3.093,0,0,0-5.464,0L.359,18.485A3.079,3.079,0,0,0,3.092,23H20.908a3.079,3.079,0,0,0,2.733-4.515ZM12,20a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20Zm1-5H11l-.5-8h3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
