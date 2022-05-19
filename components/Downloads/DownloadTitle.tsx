interface DownloadTitleProps {
  children: React.ReactNode
}

export const DownloadTitle = ({ children }: DownloadTitleProps) => {
  return <h4 className="font-bold text-gray-900 md:text-lg">{children}</h4>
}
