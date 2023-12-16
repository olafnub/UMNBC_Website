import './Navbar.css'
import {useEffect, useState} from 'react';

function NavBar() {

  const [backEndData, setBackEndData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then(res => res.json())
    .then(data => setBackEndData(data));

  }, []);

  function formatPrice(price) {
    const threshold = 1;
    
    if (price < threshold) {
      return price.toFixed(5);
    } else {
      return price.toFixed(2);
    }
  }

    return (
    <div className="navbar">
        <h3><a href="/" className="navAhref">UMNBC</a></h3>
        <ul className="priceNav">
          
          {backEndData && backEndData[0].data ? (
            backEndData[0].data.map((crypto, i) => (
              <li key={i}>{crypto.name} : {formatPrice(crypto.quote.USD.price)}</li>
              ))
            ) : (
              <p>Loading...</p>
            )
          }

          </ul>
        <nav>
          <ul className="navUl">
            <li><a href="#aboutUs" className="navAhref">About us</a></li>
            <li><a href="/#" className="navAhref">Resources</a></li>
            <li><a href="/#" className="navAhref">Alumini</a></li>
            <li><a href="/#" className="navAhref">Events</a></li>
          </ul>
        </nav>
    </div>
    );
}
export default NavBar;