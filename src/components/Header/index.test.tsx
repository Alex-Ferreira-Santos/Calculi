import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from ".";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render the heading", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should change the app theme", () => {
    const { container } = render(<Header />);

    const button = screen.getByTitle("Mudar o tema");
    expect(container.firstChild).toHaveStyle(
      "background-color: rgb(255 255 255)"
    );
    fireEvent.click(button);
    expect(container.firstChild).toHaveStyle("background-color: rgb(42 45 52)");
  });

  it("should open the menu tab when click in the burguer button", () => {
    const { container } = render(<Header />);

    const burguerButton = screen.getByTitle("Menu");
    fireEvent.click(burguerButton);
    expect(container.firstChild?.firstChild).toHaveClass("top-0 bottom-0");
  });
});
