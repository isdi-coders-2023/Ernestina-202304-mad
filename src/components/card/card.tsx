import { Link } from "react-router-dom";
import { Digimon } from "../../models/digimon";
import style from "./card.module.scss";

type PropsType = {
  item: Digimon;
};

export function Card({ item }: PropsType) {
  return (
    <Link to={`details/${item.id}`}>
      <li className={style.card}>
        <div className={style.cardImage}>
          <img src={item.images[0].href} alt={`${item.name} representation`} />
        </div>
        <div className={style.cardData}>
          <span>{item.name}</span>
          <span className={style.cardId}>#{item.id}</span>
        </div>
      </li>
    </Link>
  );
}
