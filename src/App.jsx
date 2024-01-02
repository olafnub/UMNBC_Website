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
        </div>
        <div className="we-offer page-wrap" id="weOffer">
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem"}}>What we offer</h2>
        <div className="artboard artboard-horizontal phone-5">
          <p>Resume booster, <span className="color-red">Web3 research</span>, Connecting with professionals, <span className="color-blue">Linkedin refining</span>, Web dev experience, Hands on blockchain application building, Social media roles, <span className="color-purple">Recruitment roles</span>, Twitter role, Instagram role, Community outreach, <span className="color-yellow">Talking to professionals</span>, Workshops, Hackathons, <span className="color-green">New York</span>, Columbia Hack, Speaking opportunities, Presenting, Listening to research presentations, <span className="color-blue">Networking</span>, Decentralized finance (DeFi) exploration, <span className="color-dark-blue">Collaborating with other clubs</span>, investing, trading. Resume booster, Web3 research, <span className="color-red">Connecting with professionals</span>, Linkedin help, Web dev experience, Hands on blockchain application building, Social media roles, Recruitment roles, Twitter role, Instagram role, <span className="color-green">Community outreach</span>, Talking to professionals, Workshops, <span className="color-dark-blue">Hackathons</span>, New York, Columbia Hack, Speaking opportunities, Presenting, <span className="color-blue">Listening to research presentations</span>, Networking, Decentralized finance (<span className="color-purple">DeFi</span>) exploration, Collaborating with other clubs, investing, trading. Resume booster, Web3 research, Connecting with professionals, Linkedin help, Web dev experience, <span className="color-yellow">Hands on blockchain application building</span>, Social media roles, Recruitment roles, <span className="color-dark-blue">Twitter role</span>, <span className="color-red">Instagram role</span>, Community outreach, Talking to professionals, Workshops, <span className="color-purple">Hackathons</span>, New York, Columbia Hack, Speaking opportunities, Presenting, Listening to research presentations, Networking, Decentralized finance (DeFi) exploration, Collaborating with other clubs, <span className="color-green">investing</span>, trading. Resume booster, Web3 research, <span className="color-blue">Connecting with professionals</span>, Linkedin help, <span className="color-dark-blue">Web dev experience</span>, Hands on blockchain application building, Social media roles, Recruitment roles, Twitter role, Instagram role, Community outreach, <span className="color-red">Talking to professionals</span>, Workshops, Hackathons, New York, Columbia Hack, Speaking opportunities, Presenting, Listening to research presentations, Networking, Decentralized finance (DeFi) exploration, Collaborating with other clubs, investing, trading. <span className="color-yellow">Resume booster</span>, Web3 research, Connecting with professionals, Linkedin help, Web dev experience. Resume booster, Web3 research, Connecting with professionals, Linkedin help, Web dev experience, Hands on blockchain application building, Social media roles, Recruitment roles, Twitter role, Instagram role, Community outreach, Talking to professionals, Workshops, Hackathons, New York, Columbia Hack, Speaking opportunities, Presenting, Listening to research presentations, Networking, Decentralized finance (DeFi) exploration, Collaborating with other clubs, investing, trading</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a href="https://docs.google.com/document/d/1N117P_uv7sXiuJ8b3k2_neDYEQMdhYVIradbzrpuS6s/edit?usp=sharing">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Blockchain Resources
              </a>
            </li> 
            <li>
              <a href="https://drive.google.com/drive/folders/1dSjpykNX_HUUV6XEcwSuFAaYRCF7p-Qj?usp=sharing">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Past Slides
              </a>
            </li> 
            <li>
              <a href="https://www.linkedin.com/in/andy-li-olafnub/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Linkedin Example
              </a>
            </li> 
          </ul>
        </div>
      
        </div>
        <div className="our-team page-wrap" id="ourTeam">
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem"}}>Meet our team</h2>
        </div>
      </div>
    </Layout>
  );
}

export default App;
