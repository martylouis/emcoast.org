import ButtonDownload from './ButtonDownload';

const ZoomMeeting = ({ day, time, fileName, updated }) => (
  <div className="w-64 px-6 py-4 mx-auto my-8 bg-white border border-gray-300 rounded-lg shadow-md md:my-4">
    <div className="pt-1 text-lg font-bold leading-none tracking-wide uppercase">
      {day}
    </div>
    <div className="mt-2 text-3xl font-extrabold leading-none tracking-tighter">
      {time}
    </div>
    {fileName && updated ? (
      <ButtonDownload
        link={`https://static.martylouis.com/emcoast/${fileName}--${updated}.pdf`}
        text="Download Schedule"
        updated={updated}
      />
    ) : (
      <div>Schedule Coming Soon</div>
    )}
  </div>
);

export default ZoomMeeting;
