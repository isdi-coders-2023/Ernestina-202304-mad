export class ApiRepository<T> {
  constructor(public url: string) {}

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    return response.json() as Promise<T[]>;
  }
}
