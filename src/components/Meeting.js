import DownloadCard from '@/components/Download';

export default function Meeting({
  meeting,
  day,
  time,
  title,
  fileName,
  updated,
}) {
  const static_src_url = 'https://static.martylouis.com/emcoast/';
  const url = `${static_src_url}${fileName}--${updated}.pdf`;
  const highlight = day == 'Sunday' ? 'blue' : 'purple';

  return (
    <div className="flex mb-8">
      <div className="flex flex-col items-center">
        <div
          className={`flex justify-center p-1 mt-1.5 text-${highlight}-800 border-4 rounded-full align-center border-gray-50 bg-opacity-10`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-1 w-px bg-gray-200"></div>
      </div>
      <div className="flex flex-col flex-1 ml-2 space-y-4">
        <div className="flex flex-col pt-1">
          <span className={`font-medium text-${highlight}-800`}>{meeting}</span>
          <span className={`text-sm text-${highlight}-900 opacity-75`}>
            Every {day} at {time} CT on Zoom
          </span>
        </div>
        <DownloadCard title={title} fileName={fileName} updated={updated} />
      </div>
    </div>
  );
}
