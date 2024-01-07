import {} from 'dotenv/config';

const COINMARKETAPI = process.env.REACT_APP_COINMARKETCAP_APIKEY;
const CRYPTOPANICAPI = process.env.REACT_APP_CRYPTOPANIC_APIKEY;
const DISCORDAPI = process.env.REACT_APP_DISCORD_APIKEY;

export const cache = {
    coinmarket: null,
    cryptopanic: null,
    discord: null
}

const updateApiCall = () => {

    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=30&sort=market_cap&cryptocurrency_type=all&tag=all', {
        headers: {
        'X-CMC_PRO_API_KEY': `${COINMARKETAPI}`,
        'Accept': 'application/json'
        }
    })
    .then(coinmarketRes => {
        if (!coinmarketRes.ok) {
        throw new Error("Coinmarket API request failed with status, ", coinmarketRes.status);
        }
        return coinmarketRes.json();
    })
    .then(data => cache.coinmarket = data)
    .catch(err => {
        console.log("Error fetching data from Coinmarket with an error ", err)
    })

    fetch(`https://cryptopanic.com/api/v1/posts/?auth_token=${CRYPTOPANICAPI}&public=true`)
    .then(cryptoPanicRes => {
        if (!cryptoPanicRes.ok) {
            throw new Error("Cryptopanic API request failed with status: ", cryptoPanicRes.status)
        }
        return cryptoPanicRes.json();
    })
    .then(data => cache.cryptopanic = data)
    .catch(err => {
        console.log("Error fetching data from Cryptopanic with an error: ", err)
    });

    fetch(`https://discord.com/api/guilds/${DISCORDAPI}/widget.json`)
    .then((discordResponse) => discordResponse.json())
    .then((data) => cache.discord = data);
  }
  
export default updateApiCall;