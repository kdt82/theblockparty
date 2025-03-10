
import React, { useState } from "react";
import { Send, Music } from "lucide-react";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Newsletter Subscription */}
          <div className="glass-card p-8">
            <h3 className="flex items-center text-xl font-display font-semibold mb-4">
              <Send className="mr-2 h-5 w-5 text-accent" />
              Subscribe to our newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest crypto news, market updates, and deep dives directly to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  className="glass-input w-full px-4 py-3 pr-12 text-sm"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-accent text-white flex items-center justify-center disabled:opacity-70"
                  disabled={submitting}
                >
                  {submitting ? (
                    <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              {success && (
                <div className="text-sm text-crypto-up animate-fade-in">
                  Thanks for subscribing!
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </div>
            </form>
          </div>

          {/* Podcasts */}
          <div className="glass-card p-8">
            <h3 className="flex items-center text-xl font-display font-semibold mb-4">
              <Music className="mr-2 h-5 w-5 text-accent" />
              Listen to our Podcasts
            </h3>
            <p className="text-muted-foreground mb-6">
              Tune in to our weekly crypto podcasts featuring industry experts and deep market analysis.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center space-x-2 py-2 px-4 rounded-full border border-border transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-6 w-6" />
                <span className="font-medium">Spotify</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-2 py-2 px-4 rounded-full border border-border transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Apple_Podcasts.svg/1200px-Apple_Podcasts.svg.png" alt="Apple Podcasts" className="h-6 w-6" />
                <span className="font-medium">Apple Podcasts</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-2 py-2 px-4 rounded-full border border-border transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Podcasts_Logo.svg/1200px-Google_Podcasts_Logo.svg.png" alt="Google Podcasts" className="h-6 w-6" />
                <span className="font-medium">Google Podcasts</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-2 py-2 px-4 rounded-full border border-border transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Youtube_logo.svg/1024px-Youtube_logo.svg.png" alt="YouTube" className="h-5 w-7" />
                <span className="font-medium">YouTube</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Latest Episode:</h4>
              <div className="aspect-[16/9] bg-card rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/90 flex items-center justify-center">
                    <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Latest podcast episode" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <h5 className="mt-2 font-medium">Web3 Gaming Revolution: How Blockchain is Transforming the Gaming Industry</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
