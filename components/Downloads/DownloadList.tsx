import { FC } from 'react'
import { DownloadItem } from './DownloadItem'

interface Props {
  downloads: DownloadItem[]
  category: string
}

export const DownloadList: FC<Props> = ({ downloads, category }) => {
  const downloadItems = downloads.filter((item) => item.category === category)
  return (
    <>
      {downloadItems.map(({ id, ...props }) => (
        <DownloadItem key={id} {...props} />
      ))}
    </>
  )
}
