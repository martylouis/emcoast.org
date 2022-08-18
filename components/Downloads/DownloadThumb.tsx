/* eslint-disable @next/next/no-img-element */
interface DownloadThumbProps {
  url: string
  title: string
  thumbUrl: string
}

export const DownloadThumb = ({ url, title, thumbUrl }: DownloadThumbProps) => {
  return (
    <div className="group relative overflow-hidden border-b border-gray-200 bg-gray-200 pt-4 transition-all duration-200">
      <a
        className="block"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        <span className="block px-4">
          <span className="relative block h-64 shadow-2xl">
            <img
              className="w-full"
              alt={title}
              src={thumbUrl}
              width="300"
              height="517"
            />
          </span>
        </span>
        <span className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-transparent to-white/75 px-4 pb-2"></span>
      </a>
    </div>
  )
}
