import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4001");

const supportedStocks = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

function Dashboard({ email }) {
  const [subscribedStocks, setSubscribedStocks] = useState([]);
  const [stockPrices, setStockPrices] = useState({});

  useEffect(() => {
    socket.on("stockUpdate", (data) => {
      setStockPrices(data);
    });

    return () => {
      socket.off("stockUpdate");
    };
  }, []);

  const handleSubscribe = (stock) => {
    if (!subscribedStocks.includes(stock)) {
      setSubscribedStocks([...subscribedStocks, stock]);
      socket.emit("subscribe", stock);
    }
  };

  return (
    <div>
      <h1>Welcome, {email}</h1>
      <h2>Subscribe to Stocks</h2>
      {supportedStocks.map((stock) => (
        <button key={stock} onClick={() => handleSubscribe(stock)}>
          Subscribe to {stock}
        </button>
      ))}
      <h2>Subscribed Stocks</h2>
      <ul>
        {subscribedStocks.map((stock) => (
          <li key={stock}>
            {stock}: ${stockPrices[stock]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
