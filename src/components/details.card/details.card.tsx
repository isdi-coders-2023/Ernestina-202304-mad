import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";

// import style from "./details.module.scss";

export default function DetailsCard() {
  const {
    digimonContext: { digimon },
  } = useContext(AppContext);

  const { id } = useParams();

  const item = digimon.find((digimon) => digimon.id === Number(id));

  return (
    <>
      <div>
        <span>{item?.releaseDate}</span>
        <span>{item?.name}</span>
      </div>
    </>
  );
}
