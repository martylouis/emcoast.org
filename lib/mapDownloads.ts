export const mapDownloads = (downloads: any) => {
  return downloads.map((resource: any) => {
    const { public_id, uploaded_at, filename } = resource
    return {
      filename,
      id: resource.asset_id,
      public_id,
      tag: resource.tags[0],
      title: resource.context.caption,
      uploaded_at,
      updated_at: resource.context.updated_at,
      url: resource.secure_url,
    }
  })
}
