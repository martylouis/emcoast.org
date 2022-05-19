import {
  getFormattedDate,
  getRelativeDate,
  isMoreThanDaysAgo,
} from '@/lib/dateUtils'
import clsx from 'clsx'

interface DownloadItemProps {
  date: string
}

export const DownloadTimestamp = ({ date }: DownloadItemProps) => {
  return (
    <p className="text-sm text-gray-500">
      <span
        className={clsx(
          !isMoreThanDaysAgo(date, 5) && 'font-semibold text-emerald-600'
        )}
      >
        {`Updated ${
          isMoreThanDaysAgo(date, 5)
            ? getFormattedDate(date)
            : getRelativeDate(date)
        }`}
      </span>
    </p>
  )
}
