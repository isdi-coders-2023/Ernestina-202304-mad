import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./home.scss";

export function Home() {
  const title = "Digimon";
  const subtitle = "♥ Caringly crafted API";
  return (
    <>
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
      <Header
        title={title.toUpperCase()}
        subtitle={subtitle.toUpperCase()}
      ></Header>

      <Footer></Footer>
    </>
  );
}
