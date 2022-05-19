import { DownloadItem } from './DownloadItem'

interface DownloadListProps {
  items: DownloadItem[]
  category: string
}

export const DownloadList = ({ items, category }: DownloadListProps) => {
  let filteredItems = items.filter((item) => item.fields.category === category)
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {filteredItems.map((item) => (
        <DownloadItem key={item.id} item={item} />
      ))}
    </div>
  )
}
