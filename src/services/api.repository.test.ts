import { Digimon, DigimonLink } from "../models/digimon";
import { ApiRepository } from "./api.repository";

global.fetch = jest.fn().mockResolvedValue({});
const mockDigimons: Digimon[] = [
  {
    images: [],
    id: 4,
    name: "botamon",
    attributes: [],
    description: [],
    levels: [],
    releaseDate: "2342",
    types: [],
  },
];

const mockDigimonLink: DigimonLink[] = [
  {
    href: "botamon.png",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let repo: ApiRepository;
describe("Given the class ApiRepository", () => {
  beforeEach(() => {
    repo = new ApiRepository();
  });

  describe("When it is instantiated implements DigimonRepo", () => {
    test("Then it should returns...", async () => {
      const query = "something";
      const currentPage = 2;

      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockDigimons),
        ok: true,
      });
      const get = (await repo.getAll(
        query,
        currentPage
      )) as unknown as Digimon[];

      expect(get).toEqual(mockDigimons);
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  describe("When it is instantiated implements DigimonRepo", () => {
    test("Then it should returns...", async () => {
      const query = "something";
      const currentPage = 2;
      const mockError = "Error";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });

      const apiRepository = new ApiRepository();

      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockDigimonLink),
      });
      const link = await repo.getDetails(query, currentPage);
      expect(apiRepository.getDetails(query, currentPage)).rejects.toThrow(
        mockError
      );
      expect(link).toEqual(["botamon.png"]);
    });
  });
});
