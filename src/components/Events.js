import { events } from '@/data/downloads';
import Card from './Card';

export default function EventsCard() {
  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
      {events.list?.map(({ title, date, location }) => (
        <Card key={title}>
          <span className="text-xl">{title}</span> <br />
          <span className="font-bold">{date}</span> <br />
          <span className="text-sm">{location}</span>
        </Card>
      ))}
    </div>
  );
}
