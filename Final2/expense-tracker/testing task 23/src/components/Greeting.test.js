import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting Component", () => {
  test("Hello Khushhal", () => {
    render(<Greeting />);
    const getText = screen.getByText("Hello Khushhal");
    expect(getText).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    render(<Greeting />);
    const para = screen.getByText("good to see you", { exact: false });
    expect(para).toBeInTheDocument();
  });

  test("render changed if the button was clickd", () => {
    // arrange

    render(<Greeting />);

    // act

    const button = screen.getByRole("button");
    userEvent.click(button);

    // assert

    const para = screen.getByText("Changed !");
    expect(para).toBeInTheDocument();
  });

  test("does not render good to see you", () => {
    // arrange

    render(<Greeting />);

    // act

    const button = screen.getByRole("button");
    userEvent.click(button);

    // assert

    const para = screen.queryByText("good to see you", { exact: false });
    expect(para).toBeNull();
  });
});
