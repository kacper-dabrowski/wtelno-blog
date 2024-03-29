import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainNavbar } from "./mainNavbar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation");

describe("mainNavbar", () => {
  beforeEach(() => {
    jest.mocked(usePathname).mockReturnValue("/aktualnosci");
  });

  it("renders navigation buttons", () => {
    render(<MainNavbar />);

    expect(getNavbarLinkWithTitle(/aktualności/i)).toBeInTheDocument();
  });

  it("assigns an active class, when user is on route, that navlink navigates to", async () => {
    render(<MainNavbar />);

    expect(getNavbarLinkWithTitle(/aktualności/i)).toHaveClass("active");
    expect(getNavbarLinkWithTitle(/galeria/i)).not.toHaveClass("active");
  });
});

function getNavbarLinkWithTitle(title: RegExp) {
  return screen.getByText(title);
}
