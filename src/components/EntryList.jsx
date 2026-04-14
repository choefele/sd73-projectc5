import EntryCard from './EntryCard';

export default function EntryList({ entries, onClickEntry }) {
  return (
    <>
      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul className="list bg-base-100 rounded-box shadow">
          {[...entries]
            .sort((a, b) => b.date - a.date)
            .map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                onClickEntry={onClickEntry}
              />
            ))}
        </ul>
      )}
    </>
  );
}
