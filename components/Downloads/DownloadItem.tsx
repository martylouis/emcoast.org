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
  let { title, file, uploadDate } = item.fields
  let { url, thumbnails } = file[0]
  let { url: thumbUrl } = thumbnails.large

  return (
    <Card>
      <DownloadThumb url={url} title={title} thumbUrl={thumbUrl} />
      <DownloadNew date={uploadDate} />
      <div className="flex items-end gap-3 p-4">
        <div className="flex-grow ">
          <DownloadTitle>{title}</DownloadTitle>
          <DownloadTimestamp date={uploadDate} />
        </div>
        <div className="flex-shrink">
          <DownloadButton url={url} />
        </div>
      </div>
    </Card>
  )
}
