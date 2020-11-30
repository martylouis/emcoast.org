import Card from '@components/Card';
import ButtonDownload from '@components/ButtonDownload';
import Timestamp from '@components/Timestamp';

export default function DownloadCard({ title, fileName, updated }) {
  const static_src_url = 'https://static.martylouis.com/emcoast/';
  const url = `${static_src_url}${fileName}--${updated}.pdf`;

  return (
    <Card>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:justify-between sm:items-center sm:flex-row sm:space-x-2">
        <div className="flex flex-col space-y-1">
          <p className="font-semibold">{title}</p>
          <p className="text-sm font-normal text-gray-500">
            <Timestamp date={updated} />
          </p>
        </div>
        <ButtonDownload text="Download" link={url} />
      </div>
    </Card>
  );
}