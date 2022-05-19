import { isMoreThanDaysAgo } from '@/lib/dateUtils'
import { DownloadItem } from './DownloadItem'

interface DownloadNewProps {
  item: DownloadItem
}

export const DownloadNew = ({ item }: DownloadNewProps) => {
  const { uploadDate } = item.fields
  if (isMoreThanDaysAgo(uploadDate, 5)) return null

  return (
    <div className="absolute left-0 mt-1 ml-3 top-64">
      <span className="inline-flex text-xs font-extrabold text-white uppercase rounded-md bg-emerald-600 px-1.5">
        New
      </span>
    </div>
  )
}
