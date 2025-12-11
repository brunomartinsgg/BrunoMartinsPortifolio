import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
