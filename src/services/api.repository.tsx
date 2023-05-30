import { ApiResponse } from "../models/digimon";

export class ApiRepository<T> {
  url = "https://digimon-api.com/api/v1/digimon/";

  async getAll(query: string): Promise<ApiResponse> {
    const response = await fetch(this.url + query);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    return response.json() as Promise<ApiResponse>;
  }
}
