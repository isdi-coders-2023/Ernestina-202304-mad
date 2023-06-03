import { Digimon } from "../models/digimon";
import { actionTypes } from "./actions.types";

export type DigimonAction = {
  type: string;
  payload: Digimon[];
};

export function loadDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function deleteDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.delete,
    payload,
  };
}

export function createDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.create,
    payload,
  };
}

export function updateDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.update,
    payload,
  };
}
