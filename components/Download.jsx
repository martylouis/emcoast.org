import Card from '@components/Card';
import ButtonDownload from '@components/ButtonDownload';
import Timestamp from '@components/Timestamp';

const ZoomMeeting = ({ title, day, time, fileName, updated }) => {
  const static_src_url = 'https://static.martylouis.com/emcoast/';
  const download_link = `${static_src_url}${fileName}--${updated}.pdf`;
  return (
    <Card>
      <div>
        {day && time ? (
          <div className="inline-flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">
              {day} at {time} CT
            </span>
          </div>
        ) : (
          ''
        )}
        <div className="mb-2 text-xl font-bold leading-tight">{title}</div>
        <div className="mb-4 sm:mb-1">
          <Timestamp date={updated} />
        </div>
      </div>
      {fileName && updated ? (
        <div className="sm:ml-8">
          <ButtonDownload
            link={download_link}
            text="Download"
            updated={updated}
          />
        </div>
      ) : (
        <div>Schedule Coming Soon</div>
      )}
    </Card>
  );
};

export default ZoomMeeting;
