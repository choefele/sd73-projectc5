export default function EntryDetails({ entry }) {
  if (!entry) {
    return null;
  }

  return (
    <>
      <img
        src={entry.imageUrl}
        alt={entry.title}
        className="mb-4 h-64 w-full rounded-lg object-cover"
      />
      <h2 className="mb-2 text-2xl font-bold">{entry.title}</h2>
      <p className="mb-4 text-sm text-gray-500">
        {entry.date.toLocaleDateString('en-CA')}
      </p>
      <p className="mb-6">{entry.content}</p>
    </>
  );
}
