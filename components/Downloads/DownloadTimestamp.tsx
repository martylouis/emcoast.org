import {
  getFormattedDate,
  getRelativeDate,
  isMoreThanDaysAgo,
} from '@/lib/dateUtils'
import clsx from 'clsx'
import { DownloadItem } from './DownloadItem'

interface DownloadItemProps {
  item: DownloadItem
}

export const DownloadTimestamp = ({ item }: DownloadItemProps) => {
  const { uploadDate } = item.fields
  return (
    <p className="text-sm text-gray-500">
      <span
        className={clsx(
          !isMoreThanDaysAgo(uploadDate, 5) && 'font-semibold text-emerald-600'
        )}
      >
        {`Updated ${
          isMoreThanDaysAgo(uploadDate, 5)
            ? getFormattedDate(uploadDate)
            : getRelativeDate(uploadDate)
        }`}
      </span>
    </p>
  )
}
