import "./App.css";
import grouppic from "./images/lionhack2023_group.jpg";
import { FaInstagram, FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import DiscordMemberList from "./components/DiscordMemberList.jsx";
import NewsList from "./components/NewsList.jsx";
import autoFetch from "./utils/autoFetch.js";
import Layout from "./components/Layout.jsx";
import MoreAboutClub from './components/MoreAboutClub.jsx';
import WeOffer from './components/WeOffer.jsx';

function App() {
  const [newsResults, setNewsResults] = useState(null);
  const [discordMembers, setDiscordMembers] = useState(null);

  useEffect(() => {
    (async () => {
      const [newsData, discordData] = await Promise.all([
        autoFetch("/crypto-panic/api"),
        autoFetch("/discord/api"),
      ]);

      setNewsResults(newsData?.results);
      setDiscordMembers(discordData?.members);
    })().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Layout>
      <div className="App">
        <div className="hero-wrap page-wrap">
          <div className="hero">
            <div className="left-hero">
              <DiscordMemberList discordMembers={discordMembers} />
            </div>
            <div className="middle-hero">
              <img
                id="groupPic"
                src={grouppic}
                alt="group of umn blockchain at lionhack 2023"
              />
              <div className="hero-socials">
                <a
                  style={{ color: "black" }}
                  href="https://www.instagram.com/umn_blockchain"
                >
                  <FaInstagram className="hero-icons" />
                </a>
                <a href="https://discord.com/invite/EeVuh24q8E">
                  <button id="discord-button">Join our discord</button>
                </a>
                <a
                  style={{ color: "black" }}
                  href="https://discord.gg/HYxB7hkrub"
                >
                  <FaRegCalendarAlt className="hero-icons" />
                </a>
              </div>
            </div>
            <div className="right-hero">
              <NewsList newsResults={newsResults} />
            </div>
          </div>
          <div className="hero-corner-name">
            <h1>University Of Minnesota Blockchain Club</h1>
          </div>
        </div>
        <div className="about-us page-wrap" id="aboutUs">
          <h2>Why Blockchain</h2>
          <MoreAboutClub />
        </div>
        <div className="we-offer page-wrap" id="weOffer">
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem"}}>What we offer</h2>
          <WeOffer />
        </div>
        <div className="our-team page-wrap" id="ourTeam">
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem"}}>Current Officers</h2>
          <div className="officer-wrap">
            <div className="officer-box">
              <img src="https://oh.imgix.net/wp-content/uploads/2022/01/pudgy-penguin-3.jpg?auto=format%2Ccompress&ixlib=php-3.3.0&w=400"></img>
              <h4>Jorgen</h4>
              <p>Co President</p>
            </div>
            <div className="officer-box">
              <img src="https://i.redd.it/pc6kk3p0rjf81.png"></img>
                <h4>Andy</h4>
                <p>Co President</p>
            </div>
            <div className="officer-box">
              <img src="https://cdnb.artstation.com/p/assets/images/images/048/075/205/large/imdmitreey-40.jpg?1649153616"></img>
              <h4>Anthony</h4>
              <p>Social Media</p>
            </div>
            <div className="officer-box">
              <img src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png"></img>
              <h4>Anjali</h4>
              <p>Social Media</p>
            </div>
            <div className="officer-box">
              <img src="https://hellopartner.com/content/images/size/w1600/uz4FXC4Ws_hBBlHGegO5-FkwU9TFA1973dYtW2qZfbJXE-XgRgVy3I8frM-P2HLhBmmRgtHdUL9sK9aIr4ZjF2u8PIqqrZSO6hRBIfk-MNyHksdB2sMWGntaHAx5kHOGTa_ZcNqG.png"></img>
              <h4>Nithin</h4>
              <p>Web Developer</p>
            </div>
            <div className="officer-box">
              <img src="https://cdnb.artstation.com/p/assets/images/images/048/075/227/large/imdmitreey-31.jpg?1649153670"></img>
              <h4>Ahmed</h4>
              <p>Officer</p>
            </div>
            <div className="officer-box">
              <img src="https://oh.imgix.net/wp-content/uploads/2022/01/pudgy-penguin-4.jpg?auto=format%2Ccompress&ixlib=php-3.3.0&w=400"></img>
              <h4>Jackie</h4>
              <p>Officer</p>
            </div>
          </div>
          <div id="nft-disclosure">
            <p>we do not own any of the NFTs, all belong to the original owners | layout idea from <a className="color-red" href="https://www.cornellblockchain.org/">Cornell Blockchain</a></p>
            {/* We could update with our own NFTs once we  */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
