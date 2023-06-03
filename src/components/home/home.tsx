import { useDigimon } from "../../hooks/use.digimon";
import { NavOptions } from "../../types/nav.options";
import { Controls } from "../controls/controls";
import Filter from "../filter/filter";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { List } from "../list/list";
import { Nav } from "../nav/nav";
import "./home.scss";

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
      <Header
        title={title.toUpperCase()}
        subtitle={subtitle.toUpperCase()}
      ></Header>
      <img
        className="home--desktop-bg"
        src="/backgrounds/desktop/HOME.png"
        alt="Digimon desktop background"
      />
      <img
        className="home--mobile-bg"
        src="/backgrounds/mobile/MOBILE.png"
        alt="Digimon mobile background"
      />
      <div className="menu-container">
        <Filter></Filter>
        <Nav options={options}></Nav>
      </div>
      <List></List>
      <Controls></Controls>
      <Footer></Footer>
    </>
  );
}
