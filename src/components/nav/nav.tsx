import { Link } from "react-router-dom";
import { NavOptions } from "../../types/nav.options";

type Propstype = {
  options: NavOptions;
};
export function Nav({ options }: Propstype) {
  return (
    <>
      <nav>
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
