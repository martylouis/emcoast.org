import { isMoreThanDaysAgo } from '@/lib/dateUtils'

interface DownloadNewProps {
  date: string
}

export const DownloadNew = ({ date }: DownloadNewProps) => {
  if (isMoreThanDaysAgo(date, 5)) return null

  return (
    <div className="absolute left-0 mt-1 ml-3 top-64">
      <span className="inline-flex text-xs font-extrabold text-white uppercase rounded-md bg-emerald-600 px-1.5">
        New
      </span>
    </div>
  )
}
