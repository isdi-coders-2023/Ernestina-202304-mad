import { ApiResponse, Digimon, DigimonRepo } from "../models/digimon";

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

  async getDetails(query: string, currentPage: number) {
    const detailsResponse = await this.getAll(query, currentPage);

    const details = detailsResponse.content.map(async (item) => {
      const digimonDetail = fetch(item.href);
      return (await digimonDetail).json();
    });

    return Promise.all(details) as Promise<Digimon[]>;
  }
}
