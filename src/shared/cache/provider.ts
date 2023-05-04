import { CustomCache, CustomCacheProvider } from "./cache";

export class DefaultCacheProvider implements CustomCacheProvider {
  constructor(private storage: CustomCache) {}

  private timestamp = new Map();

  async get<T>(
    key: string,
    getResource: () => T | Promise<T>,
    timeToLiveInSeconds: number
  ): Promise<T | undefined> {
    const value = await this.storage.get<T>(key);
    const shouldRefetch = this.isStale(key, timeToLiveInSeconds);

    if (!value || shouldRefetch) {
      try {
        // eslint-disable-next-line no-console
        console.log(`fetching ${key}`);

        const newValue = await getResource();

        this.timestamp.set(key, Date.now());
        this.storage.set(key, newValue);

        return newValue;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`failed to set ${key}, details: ${JSON.stringify(error)}`);

        return;
      }
    }

    return value;
  }

  private isStale(key: string, timeToLiveInSeconds: number): boolean {
    const now = Date.now();
    const lastFetchInMs = Number(this.timestamp.get(key));

    const isTimeToLiveValid = timeToLiveInSeconds >= 0;
    const wasFetchedBefore = !Number.isNaN(lastFetchInMs);
    const isDataStale = lastFetchInMs + timeToLiveInSeconds * 1000 <= now;

    return !wasFetchedBefore || !isTimeToLiveValid || isDataStale;
  }

  clear(): void {
    return this.storage.clear();
  }
}
