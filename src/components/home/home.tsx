import { useDigimon } from "../../hooks/use.digimon";
import { NavOptions } from "../../types/nav.options";
import { Controls } from "../controls/controls";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { List } from "../list/list";
import { Nav } from "../nav/nav";
import "./home.scss";

export default function Home() {
  const options: NavOptions = [
    { url: "", label: "Home" },
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
      <Nav options={options}></Nav>
      <List></List>
      <Controls></Controls>
      <Footer></Footer>
    </>
  );
}
///////
