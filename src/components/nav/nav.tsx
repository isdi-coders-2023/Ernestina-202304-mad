import { navOptions } from "../../types/nav.options";
type Propstype = {
  options: navOptions;
};
export function Nav({ options }: Propstype) {
  return (
    <>
      <nav></nav>
    </>
  );
}
