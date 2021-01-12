import Card from '@/components/Card';
import ButtonDownload from '@/components/ButtonDownload';
import Timestamp from '@/components/Timestamp';

export default function DownloadCard({ data }) {
  const { title, fileName, updated } = data;
  const download_url = `https://static.martylouis.com/emcoast/${fileName}.pdf`;

  return (
    <Card>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:justify-between sm:items-center sm:flex-row sm:space-x-2">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium">{title}</p>
          <div className="text-xs font-normal text-gray-500">
            <Timestamp date={updated} />
          </div>
        </div>
        <ButtonDownload text="Download" link={download_url} />
      </div>
    </Card>
  );
}
