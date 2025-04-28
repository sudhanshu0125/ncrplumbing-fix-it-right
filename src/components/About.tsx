
import { CheckIcon } from "lucide-react";

const aboutBenefits = [
  "20+ years of plumbing experience in Delhi NCR",
  "Licensed and insured professional plumbers",
  "Same-day service available",
  "Transparent pricing with no hidden fees",
  "Quality workmanship guarantee",
  "Clean and respectful service technicians"
];

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="NCR Plumbing Professionals" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-plumbing-blue text-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-plumbing-blue">
              About NCR Plumbing
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              NCR Plumbing has been providing top-quality plumbing services to residents and businesses throughout Delhi NCR for over 20 years. Our team of skilled technicians are trained to handle all types of plumbing issues, from minor repairs to major installations.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We pride ourselves on our commitment to customer satisfaction, timely service, and exceptional workmanship. When you choose NCR Plumbing, you're choosing a reliable partner for all your plumbing needs.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {aboutBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-plumbing-medium-blue mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
