export default function Card({ children }) {
  return (
    <div className="flex flex-col">
      <div className="p-4 transition-shadow bg-white border border-gray-300 rounded-lg">
        {children}
      </div>
    </div>
  );
}
