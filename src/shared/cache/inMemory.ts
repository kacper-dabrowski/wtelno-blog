import { CustomCache } from "./cache";

export class InMemoryCache implements CustomCache {
  private storage = new Map();

  get<T>(key: string): T | undefined {
    return this.storage.get(key);
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }

  clear(): void {
    this.storage.clear();
  }

  remove(key: string): void {
    this.storage.delete(key);
  }
}
