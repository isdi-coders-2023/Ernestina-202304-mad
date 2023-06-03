import { useDigimon } from "../../hooks/use.digimon";
import DetailsCard from "../details.card/details.card";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import style from "./details.module.scss";

export default function Details() {
  useDigimon();
  const title = "Digimon";
  const subtitle = `Details page`;
  return (
    <>
      <div className={style.detailsContainer}>
        <Header
          title={title.toUpperCase()}
          subtitle={subtitle.toUpperCase()}
        ></Header>
        <img
          src="../../../public/backgrounds/desktop/DETAILS.jpg"
          alt="Details desktop background"
        />
        <DetailsCard></DetailsCard>
        <Footer></Footer>
      </div>
    </>
  );
}
