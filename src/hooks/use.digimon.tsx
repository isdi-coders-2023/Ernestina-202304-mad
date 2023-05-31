import { useCallback, useEffect, useMemo, useState } from "react";
import { Digimon } from "../models/digimon";
import { ApiRepository } from "../services/api.repository";

export function useDigimon() {
  const query = "?pageSize=20&page=";
  const currentPage = 3;
  const [digimon, setDigimon] = useState<Digimon[]>([]);

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(query, currentPage);
    const pero = loadedDigimon.content;
    setDigimon(pero);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    digimon,
    handleLoad,
  };
}
