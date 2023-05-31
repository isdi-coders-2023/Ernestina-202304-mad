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
          onClick={() => {
            currentPage > 0 && currentPage < 70
              ? setCurrentPage(currentPage - 1)
              : 0;
          }}
        >
          ⬅
        </button>
        <a href="#header">GO BACK UP</a>
        <button onClick={() => setCurrentPage(currentPage + 1)}>➡</button>
      </div>
    </>
  );
}
