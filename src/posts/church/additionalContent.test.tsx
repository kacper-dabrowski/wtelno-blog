import { render, screen } from "@testing-library/react";
import { getChurchContentBeforePost } from "./additionalContent";
import { additionalPageContentService } from "../service/additionalContentService";
import { fakeDto } from "./dto";

describe("church - additional content", () => {
  beforeEach(() => {
    jest
      .spyOn(additionalPageContentService, "getFromJson")
      .mockResolvedValue(fakeDto);
  });

  it("should return undefined, when content is not there", async () => {
    jest
      .spyOn(additionalPageContentService, "getFromJson")
      .mockResolvedValue(null);

    expect(await getChurchContentBeforePost()).toBeUndefined();
  });
  it("should return a component, that renders parson data", async () => {
    await renderComponent();

    expect(screen.getByText(/Proboszcz Parafii/)).toBeInTheDocument();
    expect(screen.getByText(/Any Name/)).toBeInTheDocument();
    expect(screen.getByText(/\+48 777 777 777/)).toBeInTheDocument();
    expect(screen.getByText(/parson@email.pl/)).toBeInTheDocument();
  });

  it("should return a component, that renders holy masses info", async () => {
    await renderComponent();

    expect(screen.getByText(/Niedziela i święta/)).toBeInTheDocument();
    expect(screen.getByText(/Zniesione w święta/)).toBeInTheDocument();
    expect(screen.getByText(/Dni powszednie/)).toBeInTheDocument();
  });

  it("should return a component, that renders bank account details", async () => {
    await renderComponent();

    expect(
      screen.getByText(
        /Parafia Rzymsko-Katolicka p.w Św. Michała Archanioła, ul. Kościelna 2, 86-011 Wtelno/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Darowizna na cele kultu religijnego. Imię i nazwisko (np. Jan Kowalski)"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/12 1234 1234 1234 1234 1234 1234/)
    ).toBeInTheDocument();
  });

  it("should render a component, that renders important dates list", async () => {
    await renderComponent();

    expect(screen.getByText("Odpust")).toBeInTheDocument();
    expect(screen.getByText("Data Erygowania Parafii")).toBeInTheDocument();
    expect(screen.getByText("Wieczysta Adoracja")).toBeInTheDocument();
  });
});

async function renderComponent() {
  const Component = await getChurchContentBeforePost();

  expect(Component).toBeDefined();

  render((Component as () => JSX.Element)());
}
