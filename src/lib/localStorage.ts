const ENTRIES_STORAGE_KEY = "entriesv1";

// The Entry type used in the app
export type Entry = {
  id: string;
  title: string;
  date: Date;
  imageUrl: string;
  content: string;
};

export function createEntry(
  title: string,
  imageUrl: string,
  content: string,
  date: Date = new Date(Date.now()),
): Entry {
  const createEntryId = () => {
    return (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
    );
  };

  return {
    id: createEntryId(),
    title,
    date,
    imageUrl,
    content,
  };
}

// The way the entries are stored in a stringify-compatible way
type StoredEntry = Omit<Entry, "date"> & {
  date: string;
};

function readStoredEntries(): StoredEntry[] {
  const raw = localStorage.getItem(ENTRIES_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as StoredEntry[];
  } catch {
    localStorage.removeItem(ENTRIES_STORAGE_KEY);
  }
  return [];
}

// Stores a new entry
export function storeEntry(entry: Entry): void {
  const entries = loadEntries();
  entries.push(entry);
  entries.sort((a, b) => b.date.getTime() - a.date.getTime());

  localStorage.setItem(
    ENTRIES_STORAGE_KEY,
    JSON.stringify(
      entries.map((entry: Entry) => {
        return {
          ...entry,
          date: entry.date.toISOString(),
        };
      }),
    ),
  );
}

// Loads all existing entries sorted by date
export function loadEntries(): Entry[] {
  const raw = localStorage.getItem(ENTRIES_STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const toEntry = (raw: StoredEntry) => {
        return {
          id: raw.id,
          title: raw.title,
          date: new Date(raw.date),
          imageUrl: raw.imageUrl,
          content: raw.content,
        };
      };

      return (parsed as StoredEntry[]).map(toEntry);
    }
  } catch {
    localStorage.removeItem(ENTRIES_STORAGE_KEY);
  }
  return [];
}

// Returns true if there's already an entry for the day of the given date
export function doesEntryExist(date: Date): boolean {
  const isSameDay = (a: Date, b: Date) => {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  };

  return loadEntries().some((entry) => isSameDay(entry.date, date));
}

// Removes all entries from local storage
export function removeAllEntries(): void {
  localStorage.removeItem(ENTRIES_STORAGE_KEY);
}
