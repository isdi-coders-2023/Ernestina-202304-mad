import { useCallback, useEffect, useMemo, useState } from "react";
import { Digimon } from "../models/digimon";
import { ApiRepository } from "../services/api.repository";

export function useDigimon() {
  const query = "";
  const [digimon, setDigimon] = useState<Digimon[]>([]);

  const repo: ApiRepository<Digimon> = useMemo(
    () => new ApiRepository<Digimon>(),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(query);
    setDigimon(loadedDigimon);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  console.log(repo.getAll(query));

  return {
    digimon,
    handleLoad,
  };
}
