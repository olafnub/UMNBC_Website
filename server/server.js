const express = require("express");
const app = express();
const cryptodata = require("./crypto.json"); //crypto test date

require('dotenv').config();

const PORT = process.env.PORT || 8888;

const APIKEY = process.env.REACT_APP_COINMARKETCAP_APIKEY;

app.get("/api", (req, res) => {
    res.json(cryptodata);
})

app.listen(PORT, () => {
    console.log("Server listening on 8888");
})