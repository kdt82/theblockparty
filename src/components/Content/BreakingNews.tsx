
import React from "react";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  publishedAt: string;
  category: string;
  url: string;
}

export function BreakingNews() {
  // Mock data - In a real implementation, this would come from WordPress API
  const breakingNews: NewsItem[] = [
    {
      id: 1,
      title: "Bitcoin breaks $50K as institutional demand surges",
      publishedAt: "2023-05-15T10:30:00Z",
      category: "Markets",
      url: "#",
    },
    {
      id: 2,
      title: "SEC approves Ethereum ETF applications from multiple issuers",
      publishedAt: "2023-05-15T09:15:00Z",
      category: "Regulation",
      url: "#",
    },
    {
      id: 3,
      title: "Solana announces major network upgrade to improve scalability",
      publishedAt: "2023-05-15T08:45:00Z",
      category: "Technology",
      url: "#",
    },
    {
      id: 4,
      title: "DeFi protocol TVL surpasses $50 billion for the first time since 2022",
      publishedAt: "2023-05-15T07:20:00Z",
      category: "DeFi",
      url: "#",
    },
    {
      id: 5,
      title: "Major bank launches crypto custody services for institutional clients",
      publishedAt: "2023-05-15T06:10:00Z",
      category: "Adoption",
      url: "#",
    },
    {
      id: 6,
      title: "New meme coin surges 1000% after celebrity endorsement",
      publishedAt: "2023-05-15T05:30:00Z",
      category: "Markets",
      url: "#",
    },
    {
      id: 7,
      title: "Gaming giant announces blockchain integration for in-game assets",
      publishedAt: "2023-05-15T04:15:00Z",
      category: "Gaming",
      url: "#",
    },
  ];

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const publishedDate = new Date(dateString);
    const diffInMilliseconds = now.getTime() - publishedDate.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours > 23) {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours}h ago`;
    } else {
      return `${diffInMinutes}m ago`;
    }
  };

  return (
    <div className="h-full glass-card p-6">
      <h2 className="section-title">Breaking News!</h2>
      <div className="space-y-5">
        {breakingNews.map((news) => (
          <div
            key={news.id}
            className="group relative hover:transform hover:scale-[1.02] transition-all duration-300 ease-spring"
          >
            <a
              href={news.url}
              className="block"
            >
              <div className="flex items-start space-x-2">
                <div className="min-w-[70px] text-xs font-medium text-muted-foreground">
                  {getTimeAgo(news.publishedAt)}
                </div>
                <div>
                  <div className="mb-1">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium group-hover:text-accent transition-colors duration-200">
                    {news.title}
                  </h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/news"
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/90 transition-colors duration-200"
        >
          More News
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
