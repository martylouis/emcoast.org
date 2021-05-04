import { classnames } from 'tailwindcss-classnames';
import { IconFileDownload } from './ButtonDownload';
import Card from './Card';
import Timestamp from './Timestamp';

export default function Meeting({ data }) {
  const { meeting, day, time, title, fileName, updated } = data;

  const static_src_url = 'https://static.martylouis.com/emcoast/';
  const url = `${static_src_url}${fileName}--${updated}.pdf`;
  const highlight = day == 'Sunday' ? 'blue' : 'purple';
  const download_url = `https://static.martylouis.com/emcoast/${fileName}.pdf`;

  return (
    <Card>
      <div className="flex flex-col">
        <div className="space-y-3">
          <div
            className={classnames(
              { 'text-blue-800 bg-blue-100': day == 'Sunday' },
              { 'text-purple-800 bg-purple-100': day == 'Tuesday' },
              'flex items-center justify-center w-8 h-8 rounded-full'
            )}
          >
            {day == 'Sunday' ? <IconBook /> : <IconDiamond />}
          </div>
          <div>
            <p className="text-lg">{meeting}</p>
            <p className="font-bold">
              {day}, {time} CT
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-3 space-y-2">
          <Button text="Download Schedule" link={download_url} day={day} />
          <div className="flex justify-center text-xs font-normal text-gray-600">
            <Timestamp date={updated} />
          </div>
        </div>
      </div>
    </Card>
  );
}

const Button = ({ link, day, text }) => (
  <div>
    <a
      href={link}
      className={classnames(
        { 'bg-blue-600': day == 'Sunday' },
        { 'bg-purple-600': day == 'Tuesday' },
        'flex items-center justify-center px-4 text-sm font-bold leading-none text-white rounded shadow-sm h-9 whitespace-nowrap'
      )}
      rel="noopener noreferrer"
      target="_blank"
      download
    >
      <div className="mr-1.5">
        <IconFileDownload />
      </div>
      {text}
    </a>
  </div>
);

function IconBook(props) {
  const title = props.title || 'book';

  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1"
      >
        <path
          d="M11.75,1.5 C9.679,1.5,8,2.395,8,3.5c0-1.105-1.679-2-3.75-2S0.5,2.395,0.5,3.5v11c0-1.105,1.679-2,3.75-2S8,13.395,8,14.5 c0-1.105,1.679-2,3.75-2s3.75,0.895,3.75,2v-11C15.5,2.395,13.821,1.5,11.75,1.5z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function IconDiamond(props) {
  const title = props.title || 'diamond';

  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1"
      >
        <polygon
          fill="none"
          points="2.5,1.5 13.5,1.5 15.5,5.5 8,14.5 0.5,5.5 "
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="3.5"
          x2="12.5"
          y1="5.5"
          y2="5.5"
        />
      </g>
    </svg>
  );
}
