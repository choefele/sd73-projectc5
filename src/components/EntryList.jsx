import EntryCard from './EntryCard';

export default function EntryList({ entries, onEntryClick }) {
  const sortedEntries = [...entries].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );

  return (
    <>
      {sortedEntries.length === 0 && <p>No entries yet</p>}
      <ul className="list bg-base-100 rounded-box shadow">
        {sortedEntries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} onClick={onEntryClick} />
        ))}
      </ul>
    </>
  );
}
