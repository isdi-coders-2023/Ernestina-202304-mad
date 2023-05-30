import { Digimon } from "../models/digimon";
import { DigimonAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type DigimonState = {
  digimons: Digimon[];
};

export const digimonReducer = (state: DigimonState, action: DigimonAction) => {
  let payload: Digimon[];
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Digimon[];
      return { ...state, digimons: payload };

    case actionTypes.delete:
      payload = action.payload as Digimon[];
      return { ...state, digimons: payload };

    case actionTypes.create:
      payload = action.payload as Digimon[];
      return { ...state, digimons: payload };

    case actionTypes.update:
      payload = action.payload as Digimon[];
      return { ...state, digimons: payload };

    default:
      return { ...state };
  }
};
