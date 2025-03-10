
import React, { useState } from "react";
import {
  Menu,
  Search,
  Globe,
  ChevronDown,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "All",
      href: "#",
    },
    {
      label: "News",
      href: "#",
    },
    {
      label: "Coins",
      href: "#",
      children: [
        { label: "Stable Coins", href: "#" },
        { label: "Alt Coins", href: "#" },
        { label: "Meme Coins", href: "#" },
        { label: "Blockchains", href: "#" },
      ],
    },
    {
      label: "Bitcoin",
      href: "#",
    },
    {
      label: "Ethereum",
      href: "#",
    },
    {
      label: "Solana",
      href: "#",
    },
    {
      label: "BSC/BNB",
      href: "#",
    },
    {
      label: "Ripple",
      href: "#",
    },
    {
      label: "Web3",
      href: "#",
      children: [
        { label: "DeFi", href: "#" },
        { label: "DePIN", href: "#" },
        { label: "NFTs", href: "#" },
        { label: "DAOs", href: "#" },
        { label: "Gaming", href: "#" },
      ],
    },
    {
      label: "Learn",
      href: "#",
      children: [
        { label: "How-to's", href: "#" },
        { label: "School", href: "#" },
        { label: "Podcast", href: "#" },
      ],
    },
    {
      label: "Launchpad",
      href: "#",
    },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "zh", label: "中文" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
  ];

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(prev => prev === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="text-2xl font-display font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                The Block Party
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="nav-item flex items-center"
                  onClick={() => item.children && toggleSubmenu(item.label)}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4 text-foreground/70" />
                  )}
                </button>
                {item.children && (
                  <div className={`absolute top-full left-0 mt-1 w-48 rounded-lg glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-spring transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50`}>
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-secondary/50 transition-colors duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            
            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-secondary transition-colors duration-200">
                <Globe className="h-5 w-5" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 rounded-lg glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-spring transform origin-top-right translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-secondary/50 transition-colors duration-200"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card fixed inset-0 z-50 mt-[73px] overflow-y-auto">
          <div className="space-y-1 p-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-1">
                <button
                  className="w-full text-left px-3 py-2 rounded-md font-medium flex items-center justify-between"
                  onClick={() => item.children && toggleSubmenu(item.label)}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        openSubmenu === item.label ? "transform rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.children && openSubmenu === item.label && (
                  <div className="mt-1 ml-4 space-y-1 border-l-2 border-accent/30 pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 rounded-md text-sm"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
