import express from "express";
import cryptodata from "./crypto.json" assert { type: "json" };
import panicdata from "./panic.json" assert { type: "json" };
import {} from "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8888;

const COINMARKETAPI = process.env.REACT_APP_COINMARKETCAP_APIKEY;
const CRYPTOPANICAPI = process.env.REACT_APP_CRYPTOPANIC_APIKEY;
const DISCORDAPI = process.env.REACT_APP_DISCORD_APIKEY;

app.get("/coin-market/api", (req, res) => {
  res.json(cryptodata); // replace later with actual coinmarket fetch
});

app.get("/crypto-panic/api", (req, res) => {
  // fetch(`https://cryptopanic.com/api/v1/posts/?auth_token=${CRYPTOPANICAPI}&public=true`)
  // .then(cryptoPanicRes => {
  //     if (!cryptoPanicRes.ok) {
  //         throw new Error("Cryptopanic API request failed with status: ", cryptoPanicRes.status)
  //     }
  //     return cryptoPanicRes.json();
  // })
  // .then(data => res.json(data))
  // .catch(err => {
  //     console.log("Error fetching data from Cryptopanic with an error: ", err)
  //     res.status(500).json({error: "Internal server error"});
  // });
  res.json(panicdata);
});

app.get("/discord/api", (req, res) => {
  fetch(`https://discord.com/api/guilds/${DISCORDAPI}/widget.json`)
    .then((discordResponse) => discordResponse.json())
    .then((data) => res.json(data));
});
app.listen(PORT, () => {
  console.log("Server listening on 8888");
});
