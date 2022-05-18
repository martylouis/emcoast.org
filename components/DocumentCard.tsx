import Image from 'next/image'
import ButtonDownload from '@/components/ButtonDownload'
import Timestamp from '@/components/Timestamp'

interface File {
  id: string
  url: string
  thumbnails: {
    large: {
      url: string
    }
  }
}

interface IDocumentCardProps {
  post: {
    fields: {
      file: File[]
      uploadDate: string
      title?: string
    }
  }
}

export const DocumentCard = ({ post }: IDocumentCardProps) => (
  <div className="overflow-hidden bg-white border border-gray-200 shadow rounded-xl">
    {'file' in post.fields &&
      post.fields.file.map(({ id, url, thumbnails }) => (
        <div
          key={id}
          className="relative pt-4 overflow-hidden transition-all duration-200 bg-gray-200 border-b border-gray-200 group"
        >
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
                  alt={post.fields.title}
                  src={thumbnails.large.url}
                />
              </span>
            </span>
            <span className="absolute bottom-0 w-full h-24 px-4 pb-2 bg-gradient-to-b from-transparent to-white/75"></span>
          </a>
        </div>
      ))}

    <div className="flex items-center gap-2 p-4">
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 md:text-lg">
          {post.fields.title}
        </h4>
        {'uploadDate' in post.fields && (
          <div className="text-sm text-gray-500">
            <Timestamp date={post.fields.uploadDate} />
          </div>
        )}
      </div>
      <div className="shrink-0">
        {'file' in post.fields ? (
          <div className="w-full">
            {post.fields.file.map((file) => (
              <div key={file.id}>
                <ButtonDownload text="Download" link={file.url} />
              </div>
            ))}
          </div>
        ) : (
          <p>Coming Soon</p>
        )}
      </div>
    </div>
  </div>
)
