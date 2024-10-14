import { render, screen } from "@testing-library/react";
import { Filters } from "./Filters";

describe("Visual test suite for Filters", () => {
  test("Check that the correct # list items for severity are rendered out", () => {
    render(<Filters />);
    const listItems = screen.queryAllByRole("checkbox", { id: "severity" });
    expect(listItems.length).toBe(7);
  });
});
