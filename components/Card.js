export default function Card({ children }) {
  return (
    <div className="flex-row items-center justify-between p-4 my-6 bg-white rounded-md shadow-md sm:flex">
      {children}
    </div>
  );
}
