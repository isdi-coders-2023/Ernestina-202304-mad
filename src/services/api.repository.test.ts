// import { ApiResponse } from "../models/digimon";
import { ApiResponse, DigimonLink } from "../models/digimon";
import { ApiRepository } from "./api.repository";

describe("Given the class ApiRepository", () => {
  const query = "";
  const currentPage = 3;
  const expectedUrl = `https://digimon-api.com/api/v1/digimon/${query}${currentPage}`;
  // const mockDigimons: Digimon[] = [
  //   {
  //     images: [],
  //     id: 4,
  //     name: "botamon",
  //     attributes: [],
  //     description: [],
  //     levels: [],
  //     releaseDate: "2342",
  //     types: [],
  //   },
  // ];
  const mockDigimonLink: DigimonLink[] = [
    {
      href: "botamon.png",
    },
  ];

  const mockResponseLink: ApiResponse = {
    content: mockDigimonLink,
  };

  // global.fetch = jest.fn().mockResolvedValue({
  //   ok: true,
  //   json: jest.fn().mockResolvedValue(mockResponseLink),
  // });

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponseLink),
    });
  });

  // const response2 = apiRepository.getDetails(query, currentPage);

  test.only("Then it should returns make the correct API call and return expected response for getAll", async () => {
    const apiRepository = new ApiRepository();
    const response = apiRepository.getAll(query, currentPage);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockResponseLink);
  });

  // test("Then it should return make the correct API call and return expected response for getDetails", async () => {
  //   expect(global.fetch).toHaveBeenCalled();
  //   expect(response2).toEqual(mockDigimons);
  // });

  describe("When it is instantiated implements DigimonRepo", () => {
    test("Then it should returns...", async () => {
      const query = "something";
      const currentPage = 2;
      // const expectedUrl = `https://digimon-api.com/api/v1/digimon/${query}${currentPage}`;
      const mockThrowError = "Error";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });

      const apiRepository = new ApiRepository();
      expect(apiRepository.getAll(query, currentPage)).rejects.toThrow(
        mockThrowError
      );

      expect(global.fetch).toHaveBeenCalledWith();
    });
  });
});
