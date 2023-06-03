import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import style from "./details.card.module.scss";
import { Digimon } from "../../models/digimon";

export default function DetailsCard() {
  const {
    digimonContext: { digimon },
  } = useContext(AppContext);

  const { id } = useParams();

  const item = digimon.find((digimon) => digimon.id === Number(id)) as Digimon;

  return (
    <>
      <div className={style.details}>
        <ul>
          <li>
            NAME: <span>{item?.name}</span>
          </li>
          <li>
            DESCRIPTION ({item?.descriptions[1].language}) :
            <span> {item?.descriptions[1].description}</span>
          </li>
          <li>
            RELEASE DATE:
            <span> {item?.releaseDate}</span>
          </li>
          <li>
            ATTRIBUTE: <span>{item?.attributes[0].attribute}</span>
          </li>
          <li>
            LEVEL: <span>{item?.levels[0].level}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
