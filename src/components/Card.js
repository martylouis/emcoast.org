export default function Card({ children }) {
  return (
    <div className="flex flex-col space-y-4 timeline-full-width">
      <div className="px-4 py-3 transition-shadow bg-white rounded-md shadow hover:shadow-lg">
        {children}
      </div>
    </div>
  );
}
