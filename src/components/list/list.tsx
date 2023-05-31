import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Card } from "../card/card";

export function List() {
  const {
    digimonContext: { digimon },
  } = useContext(AppContext);

  return (
    <ul className="digimons" role="list">
      {digimon.map((item) => (
        <Card key={item.name} item={item}></Card>
      ))}
    </ul>
  );
}
