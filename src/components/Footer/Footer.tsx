
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Rss } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">The Block Party</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Your trusted source for cryptocurrency news, analysis, and market insights since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">News</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Coins</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Blockchains</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Web3</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Learn</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Contact</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Advertise</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Block Party. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
