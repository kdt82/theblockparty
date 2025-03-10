
import React, { useEffect } from "react";
import { MainLayout } from "@/layout/MainLayout";
import { CryptoTicker } from "@/components/Header/CryptoTicker";
import { Navigation } from "@/components/Header/Navigation";
import { BreakingNews } from "@/components/Content/BreakingNews";
import { Featured } from "@/components/Content/Featured";
import { DeepAnalysis } from "@/components/Content/DeepAnalysis";
import { MarketSection } from "@/components/MarketOverview/MarketSection";
import { SubscribeSection } from "@/components/Subscription/SubscribeSection";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/ui/Container";

const Index = () => {
  useEffect(() => {
    // Add a class to animate content as it comes into view
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in", "animate-slide-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      {/* Crypto Ticker */}
      <CryptoTicker />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Three Column Layout with equal heading levels */}
        <section className="py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Breaking News Column (25%) */}
              <div className="md:col-span-1 animate-on-scroll opacity-0">
                <BreakingNews />
              </div>

              {/* Featured Column (50%) */}
              <div className="md:col-span-2 animate-on-scroll opacity-0">
                <Featured />
              </div>

              {/* Deep Analysis Column (25%) */}
              <div className="md:col-span-1 animate-on-scroll opacity-0">
                <DeepAnalysis />
              </div>
            </div>
          </Container>
        </section>

        {/* Market Overview */}
        <section className="animate-on-scroll opacity-0">
          <Container>
            <MarketSection />
          </Container>
        </section>

        {/* Subscription and Podcasts */}
        <section className="animate-on-scroll opacity-0">
          <SubscribeSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </MainLayout>
  );
};

export default Index;
