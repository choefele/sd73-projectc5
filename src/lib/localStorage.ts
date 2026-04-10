const ENTRIES_STORAGE_KEY = "entriesv1";

// Stores a new entry
export function storeEntry({ id, title, date, imageUrl, content }) {}

// Loads all existing entries sorted by date
export function loadEntries() {
  return [];
}

// Returns true if there's already an entry for the day of the given date
export function doesEntryExist(date) {
  return false;
}

// Removes all entries from local storage
export function removeAllEntries() {}
