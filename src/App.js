import './App.css';
import Navbar from './components/Navbar.js';
import grouppic from './images/lionhack2023_group.jpg';
import {FaInstagram, FaRegCalendarAlt} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className="hero-wrap">
        <div className="hero">
          <div className="left-hero">
            <h3>Board Members</h3>
            <ul>
              <li>Annika: Co-President</li>
              <li>Jorgen: Co-President</li>
              <li>Anajli: Officer</li>
              <li>Jackie: Officer</li>
              <li>Ahmedt: Officer</li>
              <li>Andy: Officer</li>
              <li>Dennis: Officer</li>
            </ul>
            <h3>Current Members</h3>
            
          </div>
          <div className="middle-hero">
            <img style={{width: "100%", margin: "1rem"}} src={grouppic} alt="group of umn blockchain at lionhack 2023"/>
            <div className="hero-socials">
              <a style={{color: 'black'}} href="https://www.instagram.com/umn_blockchain"><FaInstagram className="hero-icons"/></a>
              <a href="https://discord.com/invite/EeVuh24q8E">
                <button id="discord-button">Join our discord</button>
              </a>
              <a style={{color: 'black'}} href="https://discord.gg/HYxB7hkrub"><FaRegCalendarAlt className="hero-icons"/></a>
            </div>
          </div>
          <div className="right-hero">
            <h3>Current news</h3>
            <iframe width="85%" scrolling="yes" allowtransparency="true" frameborder="0" src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;font_family=sans&amp;header_bg_color=30343B&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=recent&amp;text_color=333333&amp;title=Latest%20News" height="350px"></iframe>
          </div>
        </div>
        <div class="hero-corner-name">
            <h1>University Of Minnesota Blockchain Club</h1>
        </div>
      </div>
      
    </div>
  );
}

export default App;
