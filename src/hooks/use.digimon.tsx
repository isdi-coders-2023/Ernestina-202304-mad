import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ApiRepository } from "../services/api.repository";
import { DigimonState, digimonReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";

export function useDigimon() {

  const query = "?pageSize=20&page=";
  const [digimon, setDigimon] = useState<Digimon[]>([]);


  const querySize = "?pageSize=20&page=";
  const currentPage = 3;


  const [currentPage, setCurrentPage] = useState(0);

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(query, currentPage);
    const content = loadedDigimon.content;
    setDigimon(content);
    setCurrentPage;
  }, [currentPage, repo]);

  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {

    digimon,
    currentPage,
    setCurrentPage,
    handleLoad,
  };
}
