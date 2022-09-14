import { DownloadItem } from './DownloadItem'
import { FC } from 'react'

interface Props {
  downloads: DownloadItem[]
  tag: string
}

export const DownloadList: FC<Props> = ({ downloads, tag }) => {
  const downloadItems = downloads.filter((item) => item.tag === tag)
  return (
    <>
      {downloadItems.map(
        ({ id, ...props }, index) =>
          index === 0 && <DownloadItem key={id} {...props} />
      )}
    </>
  )
}
