import { cloudinary } from '@/lib/cloudinary'
import { NextApiRequest, NextApiResponse } from 'next'

const downloads = async (req: NextApiRequest, res: NextApiResponse) => {
  const { resources } = await cloudinary.search
    .expression('folder:emcoast')
    .with_field('context')
    .with_field('tags')
    .sort_by('uploaded_at', 'desc')
    .execute()
  res.send(resources)
}

export default downloads
