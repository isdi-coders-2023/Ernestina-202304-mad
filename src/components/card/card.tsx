import { Digimon } from "../../models/digimon";

type PropsType = {
  item: Digimon;
};

export function Card({ item }: PropsType) {
  return (
    <li className="card">
      <img src={item.image} alt={`Representación de ${item.name}`} />
      <div className="card-data">
        <span>{item.name}</span>
        <span className="card-id">#{item.id}</span>
        <span>{item.url}</span>
      </div>
    </li>
  );
}
