import style from "./filter.module.scss";

export default function Filter() {
  return (
    <div className={style.filter}>
      {/* <img src="../../../public/triangle.png" alt="triangle" /> */}
      <select name="release-date" id="release-date" defaultValue={""}>
        <option value="" disabled>
          RELEASE DATE &nbsp; ▼
        </option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
      </select>
    </div>
  );
}
