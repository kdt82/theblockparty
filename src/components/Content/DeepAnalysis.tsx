
import React from "react";

interface Analysis {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
}

export function DeepAnalysis() {
  // Mock data - In a real implementation, this would come from WordPress API
  const analyses: Analysis[] = [
    {
      id: 1,
      title: "Bitcoin's Stock-to-Flow Model: Predicting Future Price Movements",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1023&q=80",
      url: "#",
    },
    {
      id: 2,
      title: "On-Chain Metrics Indicate Strong Accumulation Phase for Ethereum",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1046&q=80",
      url: "#",
    },
    {
      id: 3,
      title: "The Correlation Between Crypto Markets and Traditional Finance Has Reached New Highs",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1102&q=80",
      url: "#",
    },
    {
      id: 4,
      title: "Regulatory Developments: How New Policies Will Shape the Future of Crypto",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "#",
    },
  ];

  return (
    <div className="h-full glass-card p-6">
      <h2 className="section-title">Deep Analysis</h2>
      <div className="space-y-6">
        {analyses.map((analysis) => (
          <div key={analysis.id} className="group">
            <a href={analysis.url} className="block">
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={analysis.image}
                  alt={analysis.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <div className="mb-1">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/80 text-white backdrop-blur-sm">
                      {analysis.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-white">
                    {analysis.title}
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
