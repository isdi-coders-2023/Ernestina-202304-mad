import { createContext } from "react";
import { useDigimon } from "../hooks/use.digimon";

export type ContextStructure = {
  digimonContext: ReturnType<typeof useDigimon>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
