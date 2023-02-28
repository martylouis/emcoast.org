import { BadgeSuccess } from '@/components/Badge'
import { Card } from '@/components/Card'
import { isMoreThanDaysAgo } from '@/lib/dateUtils'
import { FC } from 'react'
import { DownloadButton } from './DownloadButton'
import { DownloadThumb } from './DownloadThumb'
import { DownloadTimestamp } from './DownloadTimestamp'

// generate types to the titles object
// and use them in the DownloadItem component

type Titles = {
  [key: string]: string
}

const titles: Titles = {
  clm: 'Midweek Meeting',
  publicTalks: 'Public Talks',
  av: 'A/V & Attendant',
  cleaning: 'Cleaning',
  fsg: 'Field Service Groups',
  fsgMeetings: 'Field Service Meetings',
}

export interface DownloadItem {
  filename?: string
  id?: string
  public_id?: string
  tag?: string
  thumb_url?: string
  updated_at?: string
  uploaded_at?: any
  url?: any
  version?: string
}

export const DownloadItem: FC<DownloadItem> = ({
  public_id,
  tag,
  updated_at,
  uploaded_at,
  url,
  version,
}) => {
  return (
    <Card className="justify-self-center">
      <DownloadThumb
        url={url}
        title={tag && titles[tag]}
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
            {tag && titles[tag]}
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
