import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from ".";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("should render the footer", () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
