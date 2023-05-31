import { AppContext } from "../../context/app.context";
import "./controls.scss";
import { useContext } from "react";

export function Controls() {
  const {
    digimonContext: { setCurrentPage, currentPage },
  } = useContext(AppContext);

  return (
    <>
      <div className="controls">
        <button
          className={currentPage === 0 ? "disabled" : "active"}
          onClick={() => {
            currentPage > 0 ? setCurrentPage(currentPage - 1) : 0;
          }}
        >
          ⬅
        </button>
        <a href="#header">GO BACK UP</a>
        <button
          className={currentPage === 70 ? "disabled" : "active"}
          onClick={() => {
            currentPage < 70 ? setCurrentPage(currentPage + 1) : 70;
          }}
        >
          ➡
        </button>
      </div>
    </>
  );
}
