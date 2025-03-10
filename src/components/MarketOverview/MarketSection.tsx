
import React from "react";
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, DollarSign, BarChart4 } from "lucide-react";

interface MarketData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume: number;
  changePercent24Hr: number;
}

interface MarketCategory {
  name: string;
  changePercent24Hr: number;
}

interface MarketMetric {
  name: string;
  value: string;
  changePercent: number;
}

export function MarketSection() {
  // Mock data - In a real implementation, this would come from CoinMarketCap API
  const topCryptos: MarketData[] = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: 51872.34, marketCap: 993289743270, volume: 28541376926, changePercent24Hr: 2.5 },
    { id: "ethereum", name: "Ethereum", symbol: "ETH", price: 2934.12, marketCap: 346598743270, volume: 15687254133, changePercent24Hr: 1.8 },
    { id: "bnb", name: "BNB", symbol: "BNB", price: 567.34, marketCap: 87598743270, volume: 2541376926, changePercent24Hr: 3.7 },
    { id: "solana", name: "Solana", symbol: "SOL", price: 107.45, marketCap: 45698743270, volume: 3124587624, changePercent24Hr: 3.7 },
    { id: "ripple", name: "XRP", symbol: "XRP", price: 0.63, marketCap: 32987654321, volume: 1984526489, changePercent24Hr: 5.2 },
  ];

  const marketCategories: MarketCategory[] = [
    { name: "DeFi", changePercent24Hr: 3.2 },
    { name: "Smart Contract", changePercent24Hr: 2.1 },
    { name: "Meme", changePercent24Hr: 8.5 },
    { name: "Gaming", changePercent24Hr: -1.4 },
    { name: "Metaverse", changePercent24Hr: 0.7 },
  ];

  const marketMetrics: MarketMetric[] = [
    { name: "Total Market Cap", value: "$2.34T", changePercent: 2.7 },
    { name: "Total Volume 24h", value: "$89.23B", changePercent: -5.2 },
    { name: "BTC Dominance", value: "49.32%", changePercent: 0.5 },
    { name: "ETH Dominance", value: "18.75%", changePercent: 0.3 },
    { name: "Fear & Greed Index", value: "72", changePercent: 6.0 },
  ];

  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formatPrice = (price: number) => {
    return price < 1 ? `$${price.toFixed(4)}` : `$${price.toFixed(2)}`;
  };

  const formatPercent = (percent: number) => {
    return percent > 0 ? `+${percent.toFixed(2)}%` : `${percent.toFixed(2)}%`;
  };

  return (
    <div className="py-12">
      <h2 className="section-title">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Cryptocurrencies */}
        <div className="glass-card p-6">
          <h3 className="flex items-center text-lg font-medium mb-4">
            <DollarSign className="mr-2 h-5 w-5 text-accent" />
            Top Cryptocurrencies
          </h3>
          <div className="space-y-4">
            {topCryptos.map((crypto) => (
              <div key={crypto.id} className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center">
                  <div className="font-medium">{crypto.name}</div>
                  <div className="ml-1 text-sm text-muted-foreground">{crypto.symbol}</div>
                </div>
                <div>
                  <div className="font-medium text-right">{formatPrice(crypto.price)}</div>
                  <div
                    className={`text-sm flex items-center justify-end ${
                      crypto.changePercent24Hr >= 0 ? "text-crypto-up" : "text-crypto-down"
                    }`}
                  >
                    {crypto.changePercent24Hr >= 0 ? (
                      <ArrowUp className="h-3 w-3 mr-0.5" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-0.5" />
                    )}
                    {formatPercent(crypto.changePercent24Hr)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Categories */}
        <div className="glass-card p-6">
          <h3 className="flex items-center text-lg font-medium mb-4">
            <BarChart4 className="mr-2 h-5 w-5 text-accent" />
            Market Categories
          </h3>
          <div className="space-y-4">
            {marketCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="font-medium">{category.name}</div>
                <div
                  className={`text-sm flex items-center ${
                    category.changePercent24Hr >= 0 ? "text-crypto-up" : "text-crypto-down"
                  }`}
                >
                  {category.changePercent24Hr >= 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {formatPercent(category.changePercent24Hr)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Metrics */}
        <div className="glass-card p-6">
          <h3 className="flex items-center text-lg font-medium mb-4">
            <BarChart4 className="mr-2 h-5 w-5 text-accent" />
            Market Metrics
          </h3>
          <div className="space-y-4">
            {marketMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="font-medium">{metric.name}</div>
                <div>
                  <div className="font-medium text-right">{metric.value}</div>
                  <div
                    className={`text-sm flex items-center justify-end ${
                      metric.changePercent >= 0 ? "text-crypto-up" : "text-crypto-down"
                    }`}
                  >
                    {metric.changePercent >= 0 ? (
                      <ArrowUp className="h-3 w-3 mr-0.5" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-0.5" />
                    )}
                    {formatPercent(metric.changePercent)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
