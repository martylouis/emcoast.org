import { useFetchDownloads } from '@/hooks/useFetchDownload'
import { FC } from 'react'
import { DownloadItem } from './DownloadItem'
import { DownloadItemLoading } from './DownloadItemLoading'

interface Props {
  tag: string
}

export const DownloadList: FC<Props> = ({ tag }) => {
  const { downloads, isError, isLoading } = useFetchDownloads()
  const downloadItems = downloads.filter(
    (item: DownloadItem) => item.tag === tag
  )
  if (isLoading) return <DownloadItemLoading />
  if (isError) return <div>Error!</div>
  return (
    <>
      {downloadItems.map(
        ({ id, ...props }: { id: string }, index: number) =>
          index === 0 && <DownloadItem key={id} {...props} />
      )}
    </>
  )
}
