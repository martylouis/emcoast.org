export default function Alert({ children, display }) {
  return display ? (
    <div className="flex flex-row items-center p-3 mx-auto my-6 font-bold text-orange-600 bg-orange-100 border border-orange-300 rounded-md nowrap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{children}</span>
    </div>
  ) : (
    ''
  );
}
