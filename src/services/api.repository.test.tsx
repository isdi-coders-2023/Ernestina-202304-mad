// import { useDigimon } from "../hooks/use.digimon";
// import { Digimon } from "../models/digimon";
// import { ApiRepository } from "./api.repository";
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// const mockDigimon: Digimon = {
//   id: 1,
// } as Digimon;

// ApiRepository.prototype.getAll = jest
//   .fn()(ApiRepository.prototype.getAll as jest.Mock)
//   .mockResolvedValue([mockDigimon]);

// function TestComponent() {
//   const { handleLoad } = useDigimon();

//   return (
//     <>
//       <h1>Test</h1>
//       <button onClick={() => handleLoad()}>Load</button>
//     </>
//   );
// }
// describe("Given the ApiRepository", () => {
//   let elements: HTMLElement[];
//   beforeEach(async () => {
//     await (async () => {
//       <TestComponent></TestComponent>;
//     });
//     elements = screen.getAllByRole("Button");
//   });
//   describe("When we instantiated it and implements the interface DigimonRepo", () => {
//     test("Then it should return a promise", async () => {
//       await userEvent.click(elements[0]);
//       expect(ApiRepository.prototype.getAll).toHaveBeenCalled();
//     });
//   });
// });
