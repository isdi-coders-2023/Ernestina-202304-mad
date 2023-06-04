import { Header } from "../header/header";
import style from "./error.module.scss";

export default function Error() {
  const title = "Digimon";
  const subtitle = `GO BACK HOME REFUGEES NOT WELCOME`;
  return (
    <>
      <div className={style.container}>
        <Header
          title={title.toUpperCase()}
          subtitle={subtitle.toUpperCase()}
        ></Header>
      </div>
    </>
  );
}
