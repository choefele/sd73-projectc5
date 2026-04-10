const ENTRIES_STORAGE_KEY = "entriesv1";

type Entry = {
  id: string;
  title: string;
  date: Date;
  imageUrl: string;
  content: string;
};

type StoredEntry = Omit<Entry, "date"> & {
  date: string;
};

function readStoredEntries(): StoredEntry[] {
  const raw = localStorage.getItem(ENTRIES_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as StoredEntry[]) : [];
}

function toEntry(raw: StoredEntry): Entry {
  return {
    id: raw.id,
    title: raw.title,
    date: new Date(raw.date),
    imageUrl: raw.imageUrl,
    content: raw.content,
  };
}

function toStoredEntry(entry: Entry): StoredEntry {
  return {
    ...entry,
    date: entry.date.toISOString(),
  };
}

function isSameDay(a: Entry["date"], b: Entry["date"]) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Stores a new entry
export function storeEntry(entry: Entry): void {
  const entries = loadEntries();
  entries.push(entry);
  entries.sort((a, b) => b.date.getTime() - a.date.getTime());
  localStorage.setItem(
    ENTRIES_STORAGE_KEY,
    JSON.stringify(entries.map(toStoredEntry)),
  );
}

// Loads all existing entries sorted by date
export function loadEntries(): Entry[] {
  return readStoredEntries().map(toEntry);
}

// Returns true if there's already an entry for the day of the given date
export function doesEntryExist(date: Entry["date"]): boolean {
  return loadEntries().some((entry) => isSameDay(entry.date, date));
}

// Removes all entries from local storage
export function removeAllEntries(): void {
  localStorage.removeItem(ENTRIES_STORAGE_KEY);
}
