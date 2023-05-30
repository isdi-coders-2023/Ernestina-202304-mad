import { Digimon } from "../models/digimon";
import { actionTypes } from "./actions.types";

export type DigimonAction = {
  type: keyof typeof actionTypes;
  payload: Digimon[];
};

export function loadDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.load as keyof typeof actionTypes,
    payload,
  };
}

export function deleteDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.delete as keyof typeof actionTypes,
    payload,
  };
}

export function createDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.create as keyof typeof actionTypes,
    payload,
  };
}

export function updateDigimonAction(payload: Digimon[]): DigimonAction {
  return {
    type: actionTypes.update as keyof typeof actionTypes,
    payload,
  };
}
