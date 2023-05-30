import { useDigimon } from "../hooks/use.digimon";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    digimonContext: useDigimon(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
