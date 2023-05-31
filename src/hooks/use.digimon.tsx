import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Digimon } from "../models/digimon";
import { ApiRepository } from "../services/api.repository";
import { DigimonState, digimonReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";

export function useDigimon() {
  const initialState: DigimonState = {
    digimons: [],
  };
  const querySize = "?pageSize=20";
  // const [digimon, setDigimon] = useState<Digimon[]>([]);

  const [DigimonState, dispatch] = useReducer(digimonReducer, initialState);

  const repo: ApiRepository<Digimon> = useMemo(
    () => new ApiRepository<Digimon>(),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(querySize);
    //const content = loadedDigimon.content;
    //setDigimon(content);
    dispatch(ac.loadDigimonAction(loadedDigimon));
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    digimon: DigimonState.digimons,
    handleLoad,
  };
}
