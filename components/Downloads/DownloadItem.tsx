import { DownloadButton } from './DownloadButton'
import { DownloadThumb } from './DownloadThumb'
import { DownloadTimestamp } from './DownloadTimestamp'
import { BadgeSuccess } from '@/components/Badge'
import { Card } from '@/components/Card'
import { isMoreThanDaysAgo } from '@/lib/dateUtils'
import { FC } from 'react'

export interface DownloadItem {
  id?: string
  title: string
  category: string
  file_url: string
  thumb_url: string
  uploaded_at: string
}

export const DownloadItem: FC<DownloadItem> = ({
  id,
  title,
  category,
  file_url,
  thumb_url,
  uploaded_at,
}) => {
  return (
    <Card data-title={title} data-category={category}>
      <DownloadThumb url={file_url} title={title} thumbUrl={thumb_url} />
      {!isMoreThanDaysAgo(uploaded_at, 5) && <BadgeSuccess>New</BadgeSuccess>}
      <div className="flex items-center gap-2 p-4">
        <div className="flex-grow">
          <h4 className="mb-1 font-bold leading-tight text-gray-900">
            {title}
          </h4>
          <DownloadTimestamp date={uploaded_at} />
        </div>
        <div className="flex-shrink">
          <DownloadButton url={file_url} />
        </div>
      </div>
    </Card>
  )
}
