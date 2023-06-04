import { useDigimon } from "../../hooks/use.digimon";
import { NavOptions } from "../../types/nav.options";
import { Controls } from "../controls/controls";
import Filter from "../filter/filter";
import { Header } from "../header/header";
import { List } from "../list/list";
import { Nav } from "../nav/nav";
import style from "./home.module.scss";

export default function Home() {
  const options: NavOptions = [
    { url: "create", label: "Create" },
    { url: "library", label: "Library" },
  ];
  useDigimon();
  const title = "Digimon";
  const subtitle = `♥ Caringly crafted API`;
  return (
    <>
      <div className={style.headerContainer}>
        <Header
          title={title.toUpperCase()}
          subtitle={subtitle.toUpperCase()}
        ></Header>
      </div>
      <img
        className={style.homeDesktopBg}
        src="/backgrounds/desktop/HOME.png"
        alt="Digimon desktop background"
      />
      <img
        className={style.homeMobileBg}
        src="/backgrounds/mobile/MOBILE.png"
        alt="Digimon mobile background"
      />
      <div className={style.menuContainer}>
        <Filter></Filter>
        <Nav options={options}></Nav>
      </div>
      <List></List>
      <Controls></Controls>
    </>
  );
}
