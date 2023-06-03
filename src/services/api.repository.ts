import { ApiResponse, DigimonRepo } from "../models/digimon";

export class ApiRepository implements DigimonRepo {
  url = "https://digimon-api.com/api/v1/digimon/";

  async getAll(query: string, currentPage: number): Promise<ApiResponse> {
    const response = await fetch(this.url + query + currentPage);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    return response.json() as Promise<ApiResponse>;
  }
}
///
