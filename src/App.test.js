import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Visual test suite", () => {
  test("Renders a Vulnerabilities container", () => {
    render(<App />);
    const vulnerabilitiesContainer = screen.getByTestId(
      "VulnerabilitiesContainer"
    );
    // screen.debug();
    expect(vulnerabilitiesContainer).toBeInTheDocument();
  });
});
