import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link to={"/"}>LOGO</Link>
        </div>
        <ul>
          <li>
            <Link to={"/sub01"}>Sub01</Link>
          </li>
          <li>
            <Link to={"/sub02"}>Sub02</Link>
          </li>
        </ul>
      </header>
    </>
  );
};
