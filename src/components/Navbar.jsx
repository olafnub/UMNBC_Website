import CoinTicker from "./CoinTicker";
import { useEffect, useState } from "react";
import "./Navbar.css";
import autoFetch from "../utils/autoFetch";

function Navbar() {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    (async () => {
      const coinData = await autoFetch("/coin-market/api");
      setCoinData(coinData?.data);
    })();
  }, []);

  return (
    <div className="navbar">
      <h3>
        <a href="/" className="navAhref">
          UMNBC
        </a>
      </h3>
      <CoinTicker coinData={coinData} />
      <nav>
        <ul className="navUl">
          <li>
            <a href="#aboutUs" className="navAhref">
              About us
            </a>
          </li>
          <li>
            <a href="#weOffer" className="navAhref">
              Resources
            </a>
          </li>
          <li>
            <a href="#ourTeam" className="navAhref">
              Team
            </a>
          </li>
          <li>
            <a href="/#" className="navAhref">
              Events
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
