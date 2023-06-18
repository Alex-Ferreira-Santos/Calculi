import { render, screen, fireEvent } from "@testing-library/react";
import { FormulaList } from ".";
import "@testing-library/jest-dom";

describe("FormulaList", () => {
  it("should render the heading", () => {
    const { container } = render(<FormulaList formulas={[]} title="test" />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
