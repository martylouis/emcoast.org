export const mapDownloads = (downloads: any) => {
  return downloads.map((resource: any) => {
    const { public_id, uploaded_at, filename, version } = resource
    return {
      filename,
      id: resource.asset_id,
      public_id,
      tag: resource.tags[0],
      uploaded_at,
      url: resource.secure_url,
      version,
    }
  })
}
