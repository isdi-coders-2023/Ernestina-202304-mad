import { Header } from "../header/header";
import style from "./error.module.scss";

export default function Error() {
  const title = "ERROR 404";
  const subtitle = `GO BACK HOME`;
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
