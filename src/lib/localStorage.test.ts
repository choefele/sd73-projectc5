import { beforeEach, describe, expect, it } from "vitest";
import {
  createEntry,
  doesEntryExist,
  loadEntries,
  removeAllEntries,
  storeEntry,
} from "./localStorage";

describe("localStorage API", () => {
  beforeEach(() => {
    removeAllEntries();
  });

  it("createEntry returns a full entry with a generated id", async () => {
    const date = new Date(2026, 3, 10, 9, 0, 0);
    const entry = createEntry(
      "First Entry",
      "https://example.com/1.jpg",
      "hello world",
      date,
    );

    expect(entry.id).toBeTypeOf("string");
    expect(entry.id.length).toBeGreaterThan(0);
    expect(entry).toMatchObject({
      title: "First Entry",
      date,
      imageUrl: "https://example.com/1.jpg",
      content: "hello world",
    });
  });

  it("storeEntry stores a new entry", () => {
    const entry = {
      id: "entry-1",
      title: "First Entry",
      date: new Date(2026, 3, 10, 9, 0, 0),
      imageUrl: "https://example.com/1.jpg",
      content: "hello world",
    };

    storeEntry(entry);

    expect(loadEntries()).toEqual([entry]);
  });

  it("loadEntries returns an empty array when nothing is stored", () => {
    expect(loadEntries()).toEqual([]);
  });

  it("loadEntries returns all stored entries sorted by date", () => {
    const entries = [
      {
        id: "entry-older",
        title: "Older",
        date: new Date(2026, 3, 8, 10, 0, 0),
        imageUrl: "https://example.com/older.jpg",
        content: "older",
      },
      {
        id: "entry-newer",
        title: "Newer",
        date: new Date(2026, 3, 10, 10, 0, 0),
        imageUrl: "https://example.com/newer.jpg",
        content: "newer",
      },
      {
        id: "entry-middle",
        title: "Middle",
        date: new Date(2026, 3, 9, 10, 0, 0),
        imageUrl: "https://example.com/middle.jpg",
        content: "middle",
      },
    ];

    storeEntry(entries[1]);
    storeEntry(entries[2]);
    storeEntry(entries[0]);

    const result = loadEntries();

    expect(result).toHaveLength(3);
    expect(result.map((entry) => entry.id).sort()).toEqual(
      entries.map((entry) => entry.id).sort(),
    );

    const timestamps = result.map((entry) => new Date(entry.date).getTime());
    expect(timestamps).toEqual([...timestamps].sort((a, b) => b - a));
  });

  it("doesEntryExist returns true when an entry already exists for the same day", () => {
    storeEntry({
      id: "entry-existing",
      title: "Existing",
      date: new Date(2026, 3, 10, 6, 30, 0),
      imageUrl: "https://example.com/existing.jpg",
      content: "existing",
    });

    expect(doesEntryExist(new Date(2026, 3, 10, 19, 45, 0))).toBe(true);
  });

  it("doesEntryExist returns false when no entry exists for that day", () => {
    storeEntry({
      id: "entry-existing",
      title: "Existing",
      date: new Date(2026, 3, 10, 6, 30, 0),
      imageUrl: "https://example.com/existing.jpg",
      content: "existing",
    });

    expect(doesEntryExist(new Date(2026, 3, 11, 6, 30, 0))).toBe(false);
  });

  it("removeAllEntries removes all entries", () => {
    storeEntry({
      id: "entry-1",
      title: "Entry",
      date: new Date(2026, 3, 10, 9, 0, 0),
      imageUrl: "https://example.com/1.jpg",
      content: "content",
    });

    removeAllEntries();

    expect(loadEntries()).toEqual([]);
    expect(doesEntryExist(new Date(2026, 3, 10, 10, 0, 0))).toBe(false);
  });
});
