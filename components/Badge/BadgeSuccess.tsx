import { isMoreThanDaysAgo } from '@/lib/dateUtils'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const BadgeSuccess: FC<Props> = ({ children }) => {
  return (
    <div className="absolute left-0 top-64 mt-1 ml-3">
      <span className="inline-flex rounded-md bg-emerald-600 px-1.5 text-xs font-extrabold uppercase text-white">
        {children}
      </span>
    </div>
  )
}

export default BadgeSuccess
