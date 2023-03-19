import { render, screen } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

describe("Async Component", () => {
  test("render password req successfull", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueDone()
    render(<ExpenseForm />);
    const list = await screen.findAllByRole("listitem");
    expect(list).not.toHaveLength(0);
  });
});
