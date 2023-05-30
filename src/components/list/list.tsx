import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { PublicCard } from "../public.card/public.card";

export function List() {
  const {
    digimonContext: { digimon },
  } = useContext(AppContext);

  return (
    <ul className="digimons" role="list">
      {digimon.map((item) => (
        <PublicCard key={item.name} item={item}></PublicCard>
      ))}
    </ul>
  );
}
