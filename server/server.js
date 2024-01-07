import express from "express";
import rateLimit from 'express-rate-limit';
import apicache from 'apicache';
import apiUpdate, {cache} from './apiUpdate.js';
import {} from "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8888;

const limit = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message: "Please try again later"
})

app.use('/api', limit);
let cachecontrol = apicache.middleware;

// Populate api data
apiUpdate();

app.get("/api/coin-market", cachecontrol("5 minutes"), (req, res) => {
  if (req.rateLimit.remaining) {
    res.json(cache.coinmarket);
  } else {
    res.status(429).json({message: "Please try again later"});
  }
});

app.get("/api/crypto-panic", cachecontrol("5 minutes"), (req, res) => {
  if (req.rateLimit.remaining) {
    res.json(cache.cryptopanic);
  } else {
    res.status(429).json({message: "Please try again later"});
  }
});

app.get("/api/discord", cachecontrol("5 minutes"), (req, res) => {
  if (req.rateLimit.remaining) {
    res.json(cache.discord);
  } else {
    res.status(429).json({message: "Please try again later"});
  }
});

app.listen(PORT, () => {
  console.log("Server listening on 8888");
});
