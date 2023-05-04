export interface CustomCache {
  get<T>(key: string): T | undefined;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
}

export interface CustomCacheProvider {
  get<T>(
    key: string,
    getResource: () => Promise<T> | T,
    timeToLiveInSeconds: number
  ): Promise<T | undefined>;
  clear(): void;
}
