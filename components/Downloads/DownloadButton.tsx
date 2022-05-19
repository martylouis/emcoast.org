import { DownloadCloud } from 'react-feather'
import { DownloadItem } from './DownloadItem'

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
      className="flex items-center justify-center w-full px-4 pl-3 text-sm font-bold leading-none text-white bg-blue-500 rounded shadow-sm h-9 whitespace-nowrap hover:bg-blue-600"
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
