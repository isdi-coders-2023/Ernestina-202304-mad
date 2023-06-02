import { DigimonLink } from "../models/digimon";
import { ApiRepository } from "./api.repository";

describe("Given the class ApiRepository", () => {
  const repo = new ApiRepository();
  const mockDigimon = [{ name: "patata", id: 2 }] as unknown as DigimonLink;
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockDigimon),
    ok: true,
  });
  describe("When it is instantiated implements DigimonRepo", () => {
    test("Then it should returns", async () => {
      const get = await repo.getAll("raton", 1);
      expect(get).toEqual(mockDigimon);
    });
  });
});
