export default function Wip({ posts }) {
  return (
    <div className="wip">
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <div>{post.fields.name}</div>
            {'file' in post.fields && (
              <div>
                {post.fields.file.map((file) => (
                  <div key={file.id}>{file.filename}</div>
                ))}
              </div>
            )}
            <div>{post.fields.uploadDate}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
