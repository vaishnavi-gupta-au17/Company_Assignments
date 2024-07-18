const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

const stocks = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];
let stockPrices = {};

// Initialize stock prices
stocks.forEach((stock) => {
  stockPrices[stock] = (Math.random() * 1000).toFixed(2);
});

// Store client subscriptions
const clientSubscriptions = {};

// Generate random stock prices every second
setInterval(() => {
  stocks.forEach((stock) => {
    stockPrices[stock] = (Math.random() * 1000).toFixed(2);
  });

  // Send updates to clients based on their subscriptions
  Object.keys(clientSubscriptions).forEach((clientId) => {
    const clientStocks = clientSubscriptions[clientId];
    const clientStockPrices = {};
    clientStocks.forEach((stock) => {
      clientStockPrices[stock] = stockPrices[stock];
    });
    io.to(clientId).emit("stockUpdate", clientStockPrices);
  });
}, 1000);

io.on("connection", (socket) => {
  console.log("New client connected");
  clientSubscriptions[socket.id] = [];

  socket.on("subscribe", (stock) => {
    if (!clientSubscriptions[socket.id].includes(stock)) {
      clientSubscriptions[socket.id].push(stock);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    delete clientSubscriptions[socket.id];
  });
});

server.listen(4001, () => console.log("Listening on port 4001"));
