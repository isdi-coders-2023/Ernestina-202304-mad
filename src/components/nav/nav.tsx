import { Link } from "react-router-dom";
import { NavOptions } from "../../types/nav.options";
import style from "./nav.module.scss";

type Propstype = {
  options: NavOptions;
};
export function Nav({ options }: Propstype) {
  return (
    <>
      <nav className={style.navbar}>
        <ul>
          {options.map((item) => (
            <li key={item.label}>
              <Link to={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
