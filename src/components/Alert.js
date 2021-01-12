export default function Alert({ data, children }) {
  const { display, title, text } = data;
  return display ? (
    <div className="flex-row items-center p-3 text-center text-orange-700 border border-orange-400 rounded-lg bg-orange-50 sm:text-left sm:flex nowrap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="flex-shrink-0 w-6 h-6 mx-auto my-1 sm:ml-0 sm:mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div>
        <p className="font-bold sm:mt-0">{title}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  ) : (
    ''
  );
}
