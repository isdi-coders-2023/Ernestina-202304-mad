import { Link } from "react-router-dom";
import { Digimon } from "../../models/digimon";

type PropsType = {
  item: Digimon;
};

export function Card({ item }: PropsType) {
  return (
    <Link to={`details/${item.id}`}>
      <li className="card">
        <div className="card-image">
          <img src={item.images[0].href} alt={`${item.name} representation`} />
        </div>
        <div className="card-data">
          <span>{item.name}</span>
          <span className="card-id">#{item.id}</span>
        </div>
      </li>
    </Link>
  );
}
