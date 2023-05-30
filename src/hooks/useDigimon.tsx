import { useState } from "react";
import { Digimon } from "../models/digimon";

export function useDigimon() {
  const [digimon, setDigimon] = useState<Digimon[]>([]);
}
