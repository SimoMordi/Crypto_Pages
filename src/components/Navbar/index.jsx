import { Link } from "react-router-dom";

 const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
      <Link to="/crypto">
        <div>Crypto</div>
      </Link>
    </div>
  );
};

export default Nav