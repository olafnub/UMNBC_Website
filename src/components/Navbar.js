import './Navbar.css'
import {useEffect, useState} from 'react';

function NavBar() {

  const [backEndData, setBackEndData] = useState(null);

  useEffect(() => {
    fetch("/coin-market/api")
    .then(res => {
      return res.json()
    })
    .then(data => setBackEndData(data))
    .catch(err => console.log("Error fetching coinmarket: ", err));
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
          
          {backEndData && backEndData.data && backEndData.data.length > 0 ? (
            backEndData.data.map((crypto, i) => (
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