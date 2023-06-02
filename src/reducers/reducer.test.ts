// const initialState: Digimon[] = [digimons]

import { Digimon } from "../models/digimon";
import { DigimonAction } from "./actions.creator";
import { actionTypes } from "./actions.types";
import { DigimonState, digimonReducer } from "./reducer";

describe('Given the digimonReducer', () => {
  describe('When it is instantiated', () => {
    test('Then it should return an initial state []', () => {
      const initialState: DigimonState = { digimons: [] }
      const action: DigimonAction = { type: '', payload: [] }
      const finalState: DigimonState = { digimons: [] };

      const result = digimonReducer(initialState, action);
      expect(result).toEqual(finalState);
    });

    test('Then it should execute "load" action type', () => {
      const initialState: DigimonState = { digimons: [] };
      const mockDigimons: Digimon[] = [
        {
          id: 3,
          name: 'agumon',
          url: 'awda',
          image: 'dawda',
        },
      ];

      const mockAction: DigimonAction = {
        type: actionTypes.load,
        payload: mockDigimons,
      };

      const result = digimonReducer(initialState, mockAction);
      expect(result).toEqual({ digimons: mockDigimons})
    });
  });
});
