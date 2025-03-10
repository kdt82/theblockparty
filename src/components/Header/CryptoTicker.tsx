
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  changePercent24Hr: number;
}

export function CryptoTicker() {
  // Mock data - In a real implementation, this would come from CoinMarketCap API
  const [cryptos, setCryptos] = React.useState<Crypto[]>([
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: 51872.34, changePercent24Hr: 2.5 },
    { id: "ethereum", name: "Ethereum", symbol: "ETH", price: 2934.12, changePercent24Hr: 1.8 },
    { id: "cardano", name: "Cardano", symbol: "ADA", price: 0.54, changePercent24Hr: -0.7 },
    { id: "ripple", name: "XRP", symbol: "XRP", price: 0.63, changePercent24Hr: 5.2 },
    { id: "solana", name: "Solana", symbol: "SOL", price: 107.45, changePercent24Hr: 3.7 },
    { id: "polkadot", name: "Polkadot", symbol: "DOT", price: 8.91, changePercent24Hr: -2.1 },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", price: 0.15, changePercent24Hr: 10.5 },
    { id: "avalanche", name: "Avalanche", symbol: "AVAX", price: 35.26, changePercent24Hr: 0.9 },
    { id: "chainlink", name: "Chainlink", symbol: "LINK", price: 17.89, changePercent24Hr: -1.2 },
    { id: "uniswap", name: "Uniswap", symbol: "UNI", price: 9.75, changePercent24Hr: 0.3 },
    { id: "litecoin", name: "Litecoin", symbol: "LTC", price: 71.23, changePercent24Hr: -0.5 },
    { id: "polygon", name: "Polygon", symbol: "MATIC", price: 0.79, changePercent24Hr: 2.1 },
    { id: "tron", name: "TRON", symbol: "TRX", price: 0.12, changePercent24Hr: 0.8 },
    { id: "stellar", name: "Stellar", symbol: "XLM", price: 0.11, changePercent24Hr: -1.5 },
    { id: "near-protocol", name: "NEAR Protocol", symbol: "NEAR", price: 6.45, changePercent24Hr: 4.2 },
    { id: "bitcoin-cash", name: "Bitcoin Cash", symbol: "BCH", price: 276.18, changePercent24Hr: 1.3 },
    { id: "monero", name: "Monero", symbol: "XMR", price: 162.48, changePercent24Hr: -0.2 },
    { id: "cosmos", name: "Cosmos", symbol: "ATOM", price: 9.87, changePercent24Hr: 1.1 },
    { id: "algorand", name: "Algorand", symbol: "ALGO", price: 0.19, changePercent24Hr: -2.8 },
    { id: "filecoin", name: "Filecoin", symbol: "FIL", price: 5.23, changePercent24Hr: 3.5 },
  ]);

  const formatPrice = (price: number) => {
    return price < 1 ? price.toFixed(4) : price.toFixed(2);
  };

  const formatPercent = (percent: number) => {
    return percent > 0 ? `+${percent.toFixed(2)}%` : `${percent.toFixed(2)}%`;
  };

  // Double the array to create a continuous ticker effect
  const tickerItems = [...cryptos, ...cryptos];

  return (
    <div className="w-full bg-secondary/50 backdrop-blur-sm border-b border-border overflow-hidden py-2">
      <div className="inline-block whitespace-nowrap animate-ticker">
        {tickerItems.map((crypto, index) => (
          <div
            key={`${crypto.id}-${index}`}
            className="ticker-item"
          >
            <span className="font-medium">{crypto.symbol}</span>
            <span>${formatPrice(crypto.price)}</span>
            <span
              className={`inline-flex items-center ${
                crypto.changePercent24Hr >= 0 ? "text-crypto-up" : "text-crypto-down"
              }`}
            >
              {crypto.changePercent24Hr >= 0 ? (
                <ArrowUp className="h-3 w-3 mr-0.5" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-0.5" />
              )}
              {formatPercent(crypto.changePercent24Hr)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
