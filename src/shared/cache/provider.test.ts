import { InMemoryCache } from "./inMemory";
import { DefaultCacheProvider } from "./provider";

describe("cache provider", () => {
  let instance: DefaultCacheProvider;
  const getResourceMock = jest.fn();

  beforeEach(() => {
    instance = new DefaultCacheProvider(new InMemoryCache());
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  it("should fetch and return value once, when called more than once and ttl not passed", async () => {
    givenGettingValueSucceess();

    const value = await instance.get("myValue", getResourceMock, 3600);
    await instance.get("myValue", getResourceMock, 3600);

    expect(getResourceMock).toHaveBeenCalledTimes(1);
    expect(value).toEqual("some-remote-asset");
  });

  it("should not save value and return undefined, when getting resource fails", async () => {
    givenGettingValueFails();

    const value = await instance.get("myValue", getResourceMock, 3600);

    expect(value).toEqual(undefined);

    givenGettingValueSucceess();

    const secondAttemptValue = await instance.get(
      "myValue",
      getResourceMock,
      3600
    );

    expect(secondAttemptValue).toEqual("some-remote-asset");
    expect(getResourceMock).toHaveBeenCalledTimes(2);
  });

  it("should clear the cache only after ttl given in seconds", async () => {
    const now = 1683229751726;
    jest.useFakeTimers();
    jest.setSystemTime(1683229751726);
    givenGettingValueSucceess();

    const value = await instance.get("myValue", getResourceMock, 3600);
    expect(getResourceMock).toHaveBeenCalledTimes(1);
    expect(value).toEqual("some-remote-asset");

    jest.setSystemTime(now + 3600 * 1000);
    givenGettingValueSucceess("another value");

    const secondValue = await instance.get("myValue", getResourceMock, 3600);

    expect(secondValue).toEqual("another value");
    expect(getResourceMock).toHaveBeenCalledTimes(2);
  });

  function givenGettingValueSucceess(value: any = "some-remote-asset") {
    getResourceMock.mockResolvedValue(value);
  }

  function givenGettingValueFails() {
    getResourceMock.mockRejectedValue("failed to get remote asset");
  }
});
