
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "@/layout/MainLayout";
import { Navigation } from "@/components/Header/Navigation";
import { Footer } from "@/components/Footer/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <Navigation />
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl font-display font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl font-display font-semibold mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <a
            href="/"
            className="btn-primary inline-flex items-center text-white"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default NotFound;
