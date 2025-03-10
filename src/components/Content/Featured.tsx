
import React from "react";

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  isFeatured?: boolean;
}

export function Featured() {
  // Mock data - In a real implementation, this would come from WordPress API
  const articles: Article[] = [
    {
      id: 1,
      title: "The Future of DeFi: How Decentralized Finance is Transforming Traditional Banking",
      category: "DeFi",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      url: "#",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Ethereum's Move to Proof-of-Stake: Environmental Impacts and Scalability Benefits",
      category: "Ethereum",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      url: "#",
    },
    {
      id: 3,
      title: "Top 5 NFT Collections That Have Generated Over $100 Million in Sales",
      category: "NFTs",
      image: "https://images.unsplash.com/photo-1645171443497-fd96144ad601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "#",
    },
    {
      id: 4,
      title: "Are CBDCs a Threat to Cryptocurrencies? Central Banks' Digital Currency Plans",
      category: "Regulation",
      image: "https://images.unsplash.com/photo-1639815188546-c43c240de9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      url: "#",
    },
    {
      id: 5,
      title: "Play-to-Earn: How Blockchain Games are Creating New Economic Opportunities",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1640964828933-4208135a48d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
      url: "#",
    },
  ];

  const featuredArticle = articles.find(article => article.isFeatured);
  const regularArticles = articles.filter(article => !article.isFeatured);

  return (
    <div className="h-full">
      <h2 className="section-title">Featured</h2>
      {featuredArticle && (
        <div className="mb-8 group">
          <a href={featuredArticle.url} className="block">
            <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/80 text-white backdrop-blur-sm">
                    {featuredArticle.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white">
                  {featuredArticle.title}
                </h3>
              </div>
            </div>
          </a>
        </div>
      )}

      <div className="space-y-6">
        {regularArticles.map((article) => (
          <div key={article.id} className="group">
            <a href={article.url} className="block">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="mb-1">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-base font-medium leading-tight group-hover:text-accent transition-colors duration-200">
                    {article.title}
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
