import { Card } from '@/components/Card'

import { FC } from 'react'

export const DownloadItemLoading: FC = () => {
  return (
    <Card>
      <div className="group relative overflow-hidden border-b border-gray-200 bg-gray-200 pt-4 transition-all duration-200">
        <div className="px-4">
          <div className="relative h-64 bg-white shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-10 w-16 animate-spin text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <span className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-transparent to-white/75 px-4 pb-2"></span>
      </div>
      <div className="flex items-center gap-2 p-4">
        <div className="flex-grow animate-pulse">
          <div className="mb-1 h-[20px] w-32 rounded-full bg-gray-400"></div>
          <div className="flex h-[20px] w-full items-center">
            <div className="h-[12px] w-24 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="flex-shrink">
          <button
            type="button"
            disabled
            className="flex h-9 w-full items-center justify-center whitespace-nowrap rounded bg-blue-500/80 px-4 pl-3 text-sm font-bold leading-none text-white shadow-sm hover:cursor-not-allowed"
          >
            <svg
              className="-ml-1 mr-1.5 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </button>
        </div>
      </div>
    </Card>
  )
}
