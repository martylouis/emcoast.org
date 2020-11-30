import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as utc from 'dayjs/plugin/utc';
import { CorporateContactJsonLd } from 'next-seo';

dayjs.extend(relativeTime);
dayjs.extend(utc);

const NOW = new Date();
const PREFIX_DEFAULT = 'Updated on ';
const DAYS_NEW = 7;
const OFFSET = 1;

export default function Timestamp({ date, prefix = PREFIX_DEFAULT }) {
  return (
    <TimestampWrapper date={date} prefix={prefix}>
      {dayjs(getOffsetDate(date)).format('MMM D, YYYY')}
    </TimestampWrapper>
  );
}

export function TimestampRelative({ date, prefix = PREFIX_DEFAULT }) {
  return (
    <TimestampWrapper date={date} prefix={prefix}>
      {dayjs(getOffsetDate(date)).fromNow()}
    </TimestampWrapper>
  );
}

function getOffsetDate(date) {
  return dayjs.utc(date).utcOffset(OFFSET);
}

function isNew(date) {
  let isNew = false;
  let getDaysDiff = dayjs(NOW).diff(date, 'day');
  isNew = getDaysDiff <= DAYS_NEW;

  return isNew;
}

function TimestampWrapper({ date, prefix, children }) {
  return (
    <div className="flex items-center">
      {isNew(date) && <TimestampNew />}
      <div className={isNew(date) ? 'font-semibold text-green-800' : undefined}>
        {prefix}
        <time dateTime={date}>{children}</time>
      </div>
    </div>
  );
}

function TimestampNew() {
  return (
    <div className="px-1 mr-2 text-xs font-bold text-green-600 border-2 border-green-600 rounded">
      New
    </div>
  );
}
