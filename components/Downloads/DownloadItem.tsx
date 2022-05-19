import { Card } from '@/components/Card'
import { DownloadButton } from './DownloadButton'
import { DownloadThumb } from './DownloadThumb'
import { DownloadTitle } from './DownloadTitle'
import { DownloadTimestamp } from './DownloadTimestamp'

export interface DownloadItem {
  id: string
  fields: {
    title: string
    category: string
    file: {
      id: string
      url: string
      thumbnails: {
        large: {
          url: string
        }
      }
    }[]
    uploadDate: string
  }
}

interface DownloadItemProps {
  item: DownloadItem
}

export const DownloadItem = ({ item }: DownloadItemProps) => {
  return (
    <Card>
      <DownloadThumb item={item} />
      <div className="flex flex-col items-center gap-3 p-4 sm:flex-row">
        <div className="flex-grow text-center sm:text-left">
          <DownloadTitle item={item} />
          <DownloadTimestamp item={item} />
        </div>
        <div className="flex-shrink">
          <DownloadButton item={item} />
        </div>
      </div>
    </Card>
  )
}
