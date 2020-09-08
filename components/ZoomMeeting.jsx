import ButtonDownload from './ButtonDownload';

const ZoomMeeting = ({ day, time, fileName, updated }) => (
  <div className="w-auto px-8 py-6 mx-auto my-4 text-center bg-white border border-gray-300 rounded shadow-2xl">
    <div className="text-xl font-medium leading-none text-teal-600 uppercase">
      {day}
    </div>
    <div className="mt-2 text-3xl font-extrabold leading-none tracking-tighter text-teal-800">
      {time}
    </div>
    {fileName && updated ? (
      <ButtonDownload
        link={`https://static.martylouis.com/emcoast/${updated}--${fileName}.pdf`}
        text="Download Schedule"
        updated={updated}
      />
    ) : (
        <div>Coming Soon</div>
      )}
  </div>
);

export default ZoomMeeting;
