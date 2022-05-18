import { events } from '@/data/downloads';
import Card from './Card';

export default function EventsCard() {
  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
      {events.list?.map(({ title, date, location }) => (
        <Card key={title}>
          <span
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />{' '}
          <br />
          <span className="font-bold">{date}</span> <br />
          <a href={location.url} target="_blank" rel="noreferrer">
            <span
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: location.title }}
            />
          </a>
        </Card>
      ))}
    </div>
  );
}
