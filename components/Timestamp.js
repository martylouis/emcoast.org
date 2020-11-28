import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const today = new Date();

export default function Timestamp({ date }) {
  // If date is less than 5 days show alert, otherwise just show regular timestamp

  let getDaysDiff = dayjs(today).diff(date, 'day');
  let isSevenDaysAgoOrLess = getDaysDiff <= 7;

  return isSevenDaysAgoOrLess ? (
    <Notify>
      Updated <time dateTime={date}>{dayjs(date).fromNow()}</time>
    </Notify>
  ) : (
    <div className="text-xs font-medium text-gray-600">
      Updated <time dateTime={date}>{dayjs(date).format('MMM D, YYYY')}</time>
    </div>
  );
}

export function Notify({ children }) {
  return (
    <div className="flex">
      <div className="flex items-center text-xs font-bold leading-none text-green-600">
        <div className="w-2 h-2 mr-1 border-4 border-green-600 rounded-full"></div>
        <div>{children}</div>
      </div>
    </div>
  );
}
