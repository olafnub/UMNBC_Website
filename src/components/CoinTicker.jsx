function CoinTicker({ coinData }) {
  function formatPrice(price) {
    const threshold = 1;

    if (price < threshold) {
      return price.toFixed(5);
    } else {
      return price.toFixed(2);
    }
  }

  return (
    <>
      {coinData ? (
        <ul className="priceNav">
          {coinData.map((crypto, i) => (
            <li key={i}>
              {crypto.name} : {formatPrice(crypto.quote.USD.price)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default CoinTicker;
