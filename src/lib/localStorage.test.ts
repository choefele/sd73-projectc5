import { beforeEach, describe, expect, it } from "vitest";
import {
  doesEntryExist,
  loadEntries,
  removeAllEntries,
  storeEntry,
} from "./localStorage";

describe("localStorage API", () => {
  beforeEach(() => {
    removeAllEntries();
  });

  it("storeEntry stores a new entry", () => {
    const entry = {
      id: "entry-1",
      title: "First Entry",
      date: new Date("2026-04-10T09:00:00.000Z"),
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
        date: new Date("2026-04-08T10:00:00.000Z"),
        imageUrl: "https://example.com/older.jpg",
        content: "older",
      },
      {
        id: "entry-newer",
        title: "Newer",
        date: new Date("2026-04-10T10:00:00.000Z"),
        imageUrl: "https://example.com/newer.jpg",
        content: "newer",
      },
      {
        id: "entry-middle",
        title: "Middle",
        date: new Date("2026-04-09T10:00:00.000Z"),
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
    const asc = [...timestamps].sort((a, b) => a - b);
    const desc = [...timestamps].sort((a, b) => b - a);
    const isSortedAsc = timestamps.every((value, index) => value === asc[index]);
    const isSortedDesc = timestamps.every(
      (value, index) => value === desc[index],
    );

    expect(isSortedAsc || isSortedDesc).toBe(true);
  });

  it("doesEntryExist returns true when an entry already exists for the same day", () => {
    storeEntry({
      id: "entry-existing",
      title: "Existing",
      date: new Date("2026-04-10T06:30:00.000Z"),
      imageUrl: "https://example.com/existing.jpg",
      content: "existing",
    });

    expect(doesEntryExist(new Date("2026-04-10T19:45:00.000Z"))).toBe(true);
  });

  it("doesEntryExist returns false when no entry exists for that day", () => {
    storeEntry({
      id: "entry-existing",
      title: "Existing",
      date: new Date("2026-04-10T06:30:00.000Z"),
      imageUrl: "https://example.com/existing.jpg",
      content: "existing",
    });

    expect(doesEntryExist(new Date("2026-04-11T06:30:00.000Z"))).toBe(false);
  });

  it("removeAllEntries removes all entries", () => {
    storeEntry({
      id: "entry-1",
      title: "Entry",
      date: new Date("2026-04-10T09:00:00.000Z"),
      imageUrl: "https://example.com/1.jpg",
      content: "content",
    });

    removeAllEntries();

    expect(loadEntries()).toEqual([]);
    expect(doesEntryExist(new Date("2026-04-10T10:00:00.000Z"))).toBe(false);
  });
});
