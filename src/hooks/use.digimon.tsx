import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ApiRepository } from "../services/api.repository";
import { DigimonState, digimonReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";

export function useDigimon() {
  const initialState: DigimonState = {
    digimons: [],
  };

  const [DigimonState, dispatch] = useReducer(digimonReducer, initialState);

  const querySize = "?pageSize=20&page=";
  const currentPage = 3;

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(querySize, currentPage);
    dispatch(ac.loadDigimonAction(loadedDigimon.content));
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    digimon: DigimonState.digimons,
    handleLoad,
  };
}
