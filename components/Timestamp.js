import moment from 'moment';

export default function Timestamp({ date }) {
  return (
    <div className="mt-2 text-xs text-gray-700">
      Updated:{' '}
      <time dateTime={date}>{moment(date).format('MMM Do, YYYY')}</time>
    </div>
  );
}
