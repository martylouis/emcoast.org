import dayjs from 'dayjs';

export default function Timestamp({ date }) {
  return (
    <div className="mt-2 text-xs text-gray-700">
      Updated: <time dateTime={date}>{dayjs(date).format('MMM D, YYYY')}</time>
    </div>
  );
}
