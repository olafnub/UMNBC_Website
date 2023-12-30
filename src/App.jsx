import "./App.css";
import grouppic from "./images/lionhack2023_group.jpg";
import { FaInstagram, FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import DiscordMemberList from "./components/DiscordMemberList.jsx";
import NewsList from "./components/NewsList.jsx";
import autoFetch from "./utils/autoFetch.js";
import Layout from "./components/Layout.jsx";

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
        <div className="hero-wrap">
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
        <div className="about-us" id="aboutUs">
          <h2>Why Blockchain</h2>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            More About Our Club
          </h2>
          <div className="card-wrap">
            <div className="card">
              <p>
                Blockchain is an emerging field with over 300 million people
                involved in either investing or developing
              </p>
            </div>
            <div className="card">
              <p>
                Great way to network and meet people in the web3 industry as
                well software engineers, lawyers, economists, artists, and more
              </p>
            </div>
            <div className="card">
              <p>
                We meet every wednesday from 7pm-8pm and will also have free
                food. We teach terms and discuss with each other every meeting
              </p>
            </div>
          </div>
          <a href="https://discord.com/invite/EeVuh24q8E">
            <button id="discord-button">View our upcoming</button>
          </a>
          <div className="our-team">
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem"}}>Meet our team</h2>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
