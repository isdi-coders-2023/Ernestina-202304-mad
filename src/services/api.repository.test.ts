import { DigimonDetails } from "../models/detail";
import { DigimonLink } from "../models/digimon";
import { ApiRepository } from "./api.repository";

describe("Given the class ApiRepository", () => {
  describe("When it is instantiated implements DigimonRepo and the response is ok", () => {
    test("Then it should return", async () => {
      const repo = new ApiRepository();
      const mockDigimon = [{ name: "patata", id: 2 }] as unknown as DigimonLink;
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(mockDigimon),
        ok: true,
      });

      const get = await repo.getAll("patata", 1);
      expect(get).toEqual(mockDigimon);
    });
  });

  describe("When it is instantiated and the response is not ok", () => {
    test("Then it should return", async () => {
      const mockError = "Error";
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });
      const repo = await new ApiRepository();

      expect(repo.getAll("test", 1)).rejects.toThrow(mockError);
    });
  });

  describe("When we use the getDetails method", () => {
    test("Then it should return", async () => {
      const repo = new ApiRepository();

      const mockInitialFetch = {
        id: "e",
        name: "e",
        href: "www.jeje.je",
      };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockInitialFetch.href),
        ok: true,
      });

      const getDetails = (await repo.getDetails(
        "epa",
        2
      )) as unknown as DigimonDetails;

      expect(getDetails).toHaveBeenCalled();
    });
  });
});
