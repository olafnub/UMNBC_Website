const express = require("express");
const app = express();
const cryptodata = require("./crypto.json"); //crypto test date
const panicdata = require("./panic.json");

require('dotenv').config();

const PORT = process.env.PORT || 8888;

const COINMARKETAPI = process.env.REACT_APP_COINMARKETCAP_APIKEY;
const CRYPTOPANICAPI = process.env.REACT_APP_CRYPTOPANIC_APIKEY;

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

app.listen(PORT, () => {
    console.log("Server listening on 8888");
});