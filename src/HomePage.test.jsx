import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders the list of diary entries", () => {
    render(<HomePage />);

    expect(
      screen.getByText("The Blue Coat at the Gate")
    ).toBeInTheDocument();
    expect(screen.getByText("The Paw on My Shoe")).toBeInTheDocument();
    expect(screen.getByText("Queen Poppy of Art Class")).toBeInTheDocument();
  });

  it("shows empty state message when there are no entries", () => {
    render(<HomePage entries={[]} />);

    expect(screen.getByText("No entries yet")).toBeInTheDocument();
  });
});
