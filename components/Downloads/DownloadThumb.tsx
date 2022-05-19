import Image from 'next/image'

interface DownloadThumbProps {
  url: string
  title: string
  thumbUrl: string
}

export const DownloadThumb = ({ url, title, thumbUrl }: DownloadThumbProps) => {
  return (
    <div className="relative pt-4 overflow-hidden transition-all duration-200 bg-gray-200 border-b border-gray-200 group">
      <a
        className="block"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        <span className="block px-4">
          <span className="relative block h-64 shadow-2xl">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              priority={true}
              alt={title}
              src={thumbUrl}
            />
          </span>
        </span>
        <span className="absolute bottom-0 w-full h-24 px-4 pb-2 bg-gradient-to-b from-transparent to-white/75"></span>
      </a>
    </div>
  )
}
