import { Digimon } from "../../models/digimon";

type PropsType = {
  item: Digimon;
};

export function PublicCard({ item }: PropsType) {
  return (
    <li className="card">
      <img src={item.image} alt={`Respresentación de ${item.name}`} />
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.url}</span>
    </li>
  );
}
