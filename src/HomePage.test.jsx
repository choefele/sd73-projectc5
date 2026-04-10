import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders the list of diary entries", () => {
    const entries = [
      {
        id: "1",
        title: "The Blue Coat at the Gate",
        date: new Date(2026, 1, 10),
        imageUrl:
          "https://images.pexels.com/photos/8715954/pexels-photo-8715954.jpeg",
        content:
          "Dear Diary, Today I saw the little dog again at the school gate. She wore her tiny blue coat and looked at everyone like she was the principal. I waved, and she wagged so hard she almost tipped over. I named her \u201cButton\u201d in my head.",
      },
    ];
    render(<HomePage entries={entries} />);

    expect(screen.getByText("The Blue Coat at the Gate")).toBeInTheDocument();
  });

  it("shows empty state message when there are no entries", () => {
    render(<HomePage entries={[]} />);

    expect(screen.getByText("No entries yet")).toBeInTheDocument();
  });
});
