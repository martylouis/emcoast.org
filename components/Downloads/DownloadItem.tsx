import { Card } from '@/components/Card'
import { DownloadButton } from './DownloadButton'
import { DownloadThumb } from './DownloadThumb'
import { DownloadTitle } from './DownloadTitle'
import { DownloadTimestamp } from './DownloadTimestamp'
import { DownloadNew } from './DownloadNew'

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
      <DownloadNew item={item} />
      <div className="flex items-end gap-3 p-4">
        <div className="flex-grow ">
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
