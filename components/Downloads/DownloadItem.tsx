import { DownloadButton } from './DownloadButton'
import { DownloadThumb } from './DownloadThumb'
import { DownloadTimestamp } from './DownloadTimestamp'
import { BadgeSuccess } from '@/components/Badge'
import { Card } from '@/components/Card'
import { isMoreThanDaysAgo } from '@/lib/dateUtils'
import { FC } from 'react'

export interface DownloadItem {
  filename?: string
  id?: string
  public_id?: string
  tag?: string
  thumb_url?: string
  title?: string
  updated_at?: string
  uploaded_at?: any
  url?: any
  version?: string
}

export const DownloadItem: FC<DownloadItem> = ({
  public_id,
  tag,
  title,
  updated_at,
  uploaded_at,
  url,
  version,
}) => {
  return (
    <Card>
      <DownloadThumb
        url={url}
        title={title}
        public_id={public_id}
        version={version}
      />
      {updated_at
        ? !isMoreThanDaysAgo(updated_at, 5) && <BadgeSuccess>New</BadgeSuccess>
        : !isMoreThanDaysAgo(uploaded_at, 5) && (
            <BadgeSuccess>New</BadgeSuccess>
          )}
      <div className="flex items-center gap-2 p-4">
        <div className="flex-grow">
          <h4 className="mb-1 font-bold leading-tight text-gray-900">
            {title}
          </h4>
          {updated_at ? (
            <DownloadTimestamp date={updated_at} />
          ) : (
            <DownloadTimestamp date={uploaded_at} />
          )}
        </div>
        <div className="flex-shrink">
          <DownloadButton url={url} />
        </div>
      </div>
    </Card>
  )
}
