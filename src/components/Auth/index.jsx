import React from 'react'

const crypto = () => {


    const cryptocurrencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];
      
      const orderTypes = ["buy", "sell"];
      
      function generateCryptocurrencies(n) {
        const result = [];
        for (let i = 0; i < n; i++) {
          const crypto = cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)];
          const price = parseFloat((Math.random() * (100000 - 0.01) + 0.01).toFixed(2));
          const orderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
          result.push({ ...crypto, price, orderType });
        }
        return result;
      }
      
      const cryptocurrenciesWithPriceAndOrder = generateCryptocurrencies(50);
      console.log(cryptocurrenciesWithPriceAndOrder);
      
  return (
    <div >
      {cryptocurrenciesWithPriceAndOrder}
    </div>
  )
}

export default crypto
