import { DigimonLink } from "../models/digimon";
import { DigimonAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type DigimonState = {
  digimons: DigimonLink[];
};

export const digimonReducer = (state: DigimonState, action: DigimonAction) => {
  let payload: DigimonLink[] | DigimonLink | number;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as DigimonLink[];
      return { ...state, digimons: payload };

    default:
      return { ...state };
  }
};
