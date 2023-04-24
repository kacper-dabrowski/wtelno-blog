import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockedRouter from "next-router-mock";
import { MainNavbar } from "./mainNavbar";

describe("mainNavbar", () => {
  it("renders navigation buttons", () => {
    render(<MainNavbar />);

    expect(getLinkWithTitle(/strona główna/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /aktualności/i,
      })
    );
  });

  it("assigns an active class, when user is on route, that navlink navigates to", async () => {
    mockedRouter.setCurrentUrl("/aktualnosci");
    render(<MainNavbar />);

    expect(
      screen.getByRole("link", { name: /aktualności/i }).parentElement
    ).toHaveClass("active");

    expect(getLinkWithTitle(/strona główna/i).parentElement).not.toHaveClass(
      "active"
    );
  });
});

function getLinkWithTitle(title: RegExp) {
  return screen.getByRole("link", { name: title });
}
