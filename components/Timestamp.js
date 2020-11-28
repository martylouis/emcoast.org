import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

const now = new Date();

export default function Timestamp({ date }) {
  let localDateUTC = dayjs.utc(date).utcOffset(16);

  let getDaysDiff = dayjs(now).diff(date, 'day');
  let isSevenDaysAgoOrLess = getDaysDiff <= 7;

  return isSevenDaysAgoOrLess ? (
    <TimestampNotify dateTime={date} color="green" classes="font-bold">
      {dayjs(localDateUTC).fromNow()}
    </TimestampNotify>
  ) : (
    <TimestampUpdate dateTime={date} color="gray">
      {dayjs(localDateUTC).format('MMM D, YYYY')}
    </TimestampUpdate>
  );
}

export function TimestampNotify({ dateTime, color, classes, children }) {
  return (
    <div className="flex items-center">
      <TimestampNotifyDot color={color} />
      <TimestampUpdate dateTime={dateTime} color={color}>
        {children}
      </TimestampUpdate>
    </div>
  );
}

export function TimestampNotifyDot({ color }) {
  return (
    <div
      className={`w-2 h-2 mr-1 border-4 border-${color}-600 rounded-full`}
    ></div>
  );
}

export function TimestampUpdate({ dateTime, color, classes, children }) {
  return (
    <div
      className={`text-xs tracking-wide leading-none font-bold text-${color}-600 ${classes}`}
    >
      Updated <time dateTime={dateTime}>{children}</time>
    </div>
  );
}
