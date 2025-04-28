
import { Button } from "@/components/ui/button";
import { WrenchIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-plumbing-blue to-plumbing-dark-blue text-white py-16 md:py-24">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")` 
        }}
      ></div>
      <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
            Expert Plumbing Services in Delhi NCR
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Professional, reliable plumbing solutions for your home and business
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-plumbing-blue hover:bg-gray-100 font-medium text-lg px-8 py-6"
            >
              <a href="#services" className="flex items-center">
                Our Services
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10 font-medium text-lg px-8 py-6"
            >
              <a href="#contact" className="flex items-center">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/90 rounded-full p-16 shadow-lg">
            <WrenchIcon size={120} className="text-plumbing-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
