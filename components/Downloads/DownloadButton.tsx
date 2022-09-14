import { DownloadItem } from './DownloadItem'
import { DownloadCloud } from 'react-feather'

interface DownloadItemProps {
  url: string
  text?: string
}

export const DownloadButton = ({
  url,
  text = 'Download',
}: DownloadItemProps) => {
  return (
    <a
      href={url}
      className="flex h-9 w-full items-center justify-center whitespace-nowrap rounded bg-blue-500 px-4 pl-3 text-sm font-bold leading-none text-white shadow-sm hover:bg-blue-600"
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <div className="mr-1.5">
        <DownloadCloud size="16" />
      </div>
      {text}
    </a>
  )
}
