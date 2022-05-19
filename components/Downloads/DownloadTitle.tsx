import { DownloadItem } from './DownloadItem'

interface DownloadItemProps {
  item: DownloadItem
}

export const DownloadTitle = ({ item }: DownloadItemProps) => {
  return (
    <h4 className="font-bold text-gray-900 md:text-lg">{item.fields.title}</h4>
  )
}
