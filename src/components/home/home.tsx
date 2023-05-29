import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./home.scss";

export function Home() {
  const title = "Digimon";
  const subtitle = "♥ Caringly crafted API";
  return (
    <>
      <img
        src="/public/backgrounds/desktop/HOME.png"
        alt="Digimon desktop background"
      />
      <Header
        title={title.toUpperCase()}
        subtitle={subtitle.toUpperCase()}
      ></Header>

      <Footer></Footer>
    </>
  );
}
