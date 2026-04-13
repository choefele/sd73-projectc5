export default function EntryCard({ entry, onClick }) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(entry.date);

  return (
    <li className="list-row cursor-pointer" onClick={() => onClick(entry)}>
      <div>
        <img
          className="size-10 rounded-box"
          src={entry.imageUrl}
          alt={entry.title}
        />
      </div>
      <div>
        <div>{formattedDate}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {entry.title}
        </div>
      </div>
      <p className="list-col-wrap text-xs">{entry.content}</p>
    </li>
  );
}
