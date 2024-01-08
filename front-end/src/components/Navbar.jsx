import CoinTicker from "./CoinTicker";
import { useEffect, useState } from "react";
import "./Navbar.scss";
import autoFetch from "../utils/autoFetch";
import {FaBars} from 'react-icons/fa';
import 'dotenv/config';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Navbar() {
  const [coinData, setCoinData] = useState(null);
  const [btnToggle, setBtnToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    if (innerWidth < 600 && btnToggle === false) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setBtnToggle(!btnToggle);
  }

  useEffect(() => {
    (async () => {
      const coinData = await autoFetch(`${SERVER_URL}/api/coin-market`);
      setCoinData(coinData?.data);
    })();

    const checkWidth = () => {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    }

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
        {(btnToggle || innerWidth > 600) && (
          <ul onClick={toggleMenu} className="navUl">
          <li>
            <a href="#" className="navAhref active"> {/* Home anchor is valid */} 
              Home
            </a>
          </li>
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
        </ul>
        )}
        <button onClick={toggleMenu} id="navButton"><FaBars className="hero-icons" /></button>
      </nav>
    </div>
  );
}
export default Navbar;
