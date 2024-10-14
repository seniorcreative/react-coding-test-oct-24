import { render, screen } from "@testing-library/react";
import { Vulnerabilities } from "./Vulnerabilities";
import { AdvisoryContext } from "../../contexts/advisoryContext";

describe("Visual test suite for Vulnerabilities", () => {
  test("Check that the loading message shows", () => {
    render(<Vulnerabilities />);

    screen.debug();
    // const loadingMessage = screen.getByTestId("loading-message");
    // expect(setLoadingFn).toBeInTheDocument();
  });
});
