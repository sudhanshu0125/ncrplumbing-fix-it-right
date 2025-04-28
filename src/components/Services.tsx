
import { ShowerHead, WrenchIcon, House, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <WrenchIcon className="h-12 w-12 text-plumbing-blue" />,
    title: "Plumbing Repairs",
    description: "Quick fixes for leaking taps, pipes, toilets, and all plumbing emergencies across Delhi NCR."
  },
  {
    icon: <ShowerHead className="h-12 w-12 text-plumbing-blue" />,
    title: "Bathroom Installation",
    description: "Professional installation of sinks, toilets, showers, and complete bathroom remodeling services."
  },
  {
    icon: <House className="h-12 w-12 text-plumbing-blue" />,
    title: "Home Plumbing",
    description: "Complete plumbing solutions for new constructions and renovations in residential properties."
  },
  {
    icon: <MapPin className="h-12 w-12 text-plumbing-blue" />,
    title: "Commercial Services",
    description: "Specialized plumbing services for offices, shops, restaurants and commercial buildings."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-plumbing-blue">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive plumbing solutions throughout Delhi NCR, with prompt service and expert technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="rounded-full bg-blue-50 p-4 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg font-medium mb-4">
            Emergency plumbing service available 24/7 across Delhi NCR
          </p>
          <a 
            href="tel:+911234567890"
            className="inline-block bg-plumbing-blue hover:bg-plumbing-dark-blue text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Call for Emergency Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
