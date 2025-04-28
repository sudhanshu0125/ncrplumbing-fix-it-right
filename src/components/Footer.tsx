
import { MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-white font-display">NCR</span>
              <span className="text-plumbing-light-blue font-display">Plumbing</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Professional plumbing services for residential and commercial properties across Delhi NCR.
            </p>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-plumbing-light-blue mr-2" />
              <p className="text-gray-300">Delhi NCR, India</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergency Repairs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bathroom Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kitchen Plumbing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Water Heater Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commercial Plumbing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Delhi</li>
              <li className="text-gray-300">Noida</li>
              <li className="text-gray-300">Gurgaon</li>
              <li className="text-gray-300">Faridabad</li>
              <li className="text-gray-300">Ghaziabad</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@ncrplumbing.com" className="text-gray-300 hover:text-white transition-colors">
                  info@ncrplumbing.com
                </a>
              </li>
              <li className="text-gray-300">
                24/7 Emergency Service Available
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} NCR Plumbing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
