import { useCallback, useEffect, useMemo, useState } from "react";
import { Digimon } from "../models/digimon";
import { ApiRepository } from "../services/api.repository";

export function useDigimon() {
  const querySize = "?pageSize=20";
  const [digimon, setDigimon] = useState<Digimon[]>([]);

  const repo: ApiRepository<Digimon> = useMemo(
    () => new ApiRepository<Digimon>(),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(querySize);
    setDigimon(loadedDigimon);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    digimon,
    handleLoad,
  };
}
