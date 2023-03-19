import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
describe("Greeting Component", () => {
  test("Hello Khushhal", () => {
    render(<Greeting />);
    const getText = screen.getByText("Hello Khushhal");
    expect(getText).toBeInTheDocument();
  });
});
