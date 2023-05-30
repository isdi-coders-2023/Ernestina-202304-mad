import { Digimon } from "../../models/digimon";

type PropsType = {
  item: Digimon;
};

export function PublicCard({ item }: PropsType) {
  return (
    <li className="public-card">
      <img src={item.image} alt={`Respresentación de ${item.name}`} />
      <span>{item.name}</span>
      <span className="card-id">#{item.id}</span>
      <span>{item.url}</span>
    </li>
  );
}