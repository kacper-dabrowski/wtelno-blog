jest.mock("next/router", () => require("next-router-mock"));
afterEach(() => {
  jest.clearAllMocks();
});
