import Image from 'next/image'

interface DownloadThumbProps {
  url: string
  title: string
  version: string
  public_id: string
}

export const DownloadThumb = ({
  url,
  title,
  version,
  public_id,
}: DownloadThumbProps) => {
  return (
    <div className="group relative overflow-hidden border-b border-gray-200 bg-gray-200 pt-4 transition-all duration-200">
      <a
        className="block"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        <div className="px-4">
          <div className="relative h-64 shadow-2xl">
            <Image
              className="object-cover object-top"
              alt={title}
              src={`/c_thumb,w_400,q_auto:eco/v${version}/${public_id}.jpg`}
              width="400"
              height="518"
              layout="fill"
            />
          </div>
        </div>
        <span className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-transparent to-white/75 px-4 pb-2"></span>
      </a>
    </div>
  )
}
