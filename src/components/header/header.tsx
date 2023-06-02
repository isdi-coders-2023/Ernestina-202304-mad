import { Link } from "react-router-dom";
import style from "./header.module.scss";

type Propstype = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: Propstype) {
  return (
    <>
      <Link to="/">
        <header className={style.header} id="header">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </header>
      </Link>
    </>
  );
}
