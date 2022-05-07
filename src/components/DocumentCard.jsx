import ButtonDownload from '@/components/ButtonDownload';
import Timestamp from '@/components/Timestamp';

const DocumentCard = ({ post }) => (
  <div className="p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm">
    <h4 className="text-lg font-bold text-gray-900">{post.fields.title}</h4>
    {'subtitle' in post.fields && (
      <p className="text-gray-600">{post.fields.subtitle}</p>
    )}
    {'uploadDate' in post.fields && (
      <div className="mt-2 text-sm text-gray-600">
        <Timestamp date={post.fields.uploadDate} />
      </div>
    )}
    <div className="flex mt-4">
      {'file' in post.fields ? (
        <div className="w-full md:w-auto md:ml-auto">
          {post.fields.file.map((file) => (
            <div key={file.id}>
              <ButtonDownload text="Download" link={post.fields.file[0].url} />
            </div>
          ))}
        </div>
      ) : (
        <p>Coming Soon</p>
      )}
    </div>
  </div>
);

export default DocumentCard;
