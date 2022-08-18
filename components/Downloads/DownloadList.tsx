import { FC } from 'react'
import { DownloadItem } from './DownloadItem'

interface DownloadListProps {
  items: DownloadItem[]
  category: 'schedules' | 'fsg'
}

export const DownloadList: FC<DownloadListProps> = ({ items, category }) => {
  let filteredItems = items.filter((item) => item.category === category)
  return (
    <>
      {filteredItems.map(({ id, ...props }) => (
        <DownloadItem key={id} {...props} />
      ))}
    </>
  )
}
