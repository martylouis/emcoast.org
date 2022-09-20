import { DownloadItem } from '@/components/Downloads'
import { mapDownloads } from '@/lib/mapDownloads'
import useSwr from 'swr'

export const useFetchDownloads = () => {
  const { data, error } = useSwr('/api/downloads', async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  })

  return {
    downloads: data ? mapDownloads(data) : [],
    isLoading: !error && !data,
    isError: error,
  }
}
