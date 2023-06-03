import { Digimon } from "../models/digimon";
import { DigimonAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type DigimonState = {
  digimons: Digimon[];
};

export const digimonReducer = (state: DigimonState, action: DigimonAction) => {
  let payload: Digimon[] | Digimon | number;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Digimon[];
      return { ...state, digimons: payload };

    default:
      return { ...state };
  }
};
