import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainNavbar } from "./mainNavbar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation");

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
    jest.mocked(usePathname).mockReturnValue("/aktualnosci");
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
