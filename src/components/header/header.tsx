import { useNavigate } from "react-router-dom";
import "./header.scss";

type Propstype = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: Propstype) {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <>
      <header className="header" id="header">
        <h1 onClick={handleReturnHome}>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
    </>
  );
}
