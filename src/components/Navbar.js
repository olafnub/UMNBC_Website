import './Navbar.css'
import {useEffect, useState} from 'react';

function NavBar() {

  const [backEndData, setBackEndData] = useState(null);

  useEffect(() => {

    fetch("/api")
    .then(res => res.json())
    .then(data => setBackEndData(data));
  }, []);

  console.log(backEndData);


    return (
    <div className="navbar">
        <h3><a href="/" className="navAhref">UMNBC</a></h3>
        <ul className="priceNav">
            <li>Lorem pa</li>
            <li>Lorem pa</li>
            <li>LoremLoremLoremLoremLorem</li>
            <li>LoremLoremLoremLoremLorem</li>
            <li>LoremLoremLoremLoremLorem</li>
            <li>LoremLoremLoremLoremLorem</li>
            <li>Doesthishoweverything?</li>
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