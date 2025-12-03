import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Avatar */}
          <div className="md:col-span-4 flex justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Avatar"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Bruno Martins
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary text-center mt-2">
              I am Software Engineer
            </h2>

            {/* Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex justify-center">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
              <div className="flex justify-center">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
