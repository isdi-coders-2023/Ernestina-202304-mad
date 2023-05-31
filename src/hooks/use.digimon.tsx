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

  const query = "?pageSize=20&page=";
  const currentPage = 3;
  const [digimon, setDigimon] = useState<Digimon[]>([]);


  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {

    const loadedDigimon = await repo.getAll(querySize);
    //const content = loadedDigimon.content;
    //setDigimon(content);
    dispatch(ac.loadDigimonAction(loadedDigimon));

    const loadedDigimon = await repo.getAll(query, currentPage);
    const pero = loadedDigimon.content;
    setDigimon(pero);

  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    digimon: DigimonState.digimons,
    handleLoad,
  };
}
