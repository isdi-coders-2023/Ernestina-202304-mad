import { DigimonLink } from "../models/digimon";
import { actionTypes } from "./actions.types";

export type DigimonAction = {
  type: string;
  payload: DigimonLink[];
};

export function loadDigimonAction(payload: DigimonLink[]): DigimonAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function deleteDigimonAction(payload: DigimonLink[]): DigimonAction {
  return {
    type: actionTypes.delete,
    payload,
  };
}

export function createDigimonAction(payload: DigimonLink[]): DigimonAction {
  return {
    type: actionTypes.create,
    payload,
  };
}

export function updateDigimonAction(payload: DigimonLink[]): DigimonAction {
  return {
    type: actionTypes.update,
    payload,
  };
}
