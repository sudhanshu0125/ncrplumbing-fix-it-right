
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real site, this would send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-plumbing-blue">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a plumbing emergency or need to schedule a service? Get in touch with NCR Plumbing today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-plumbing-blue hover:bg-plumbing-dark-blue text-white py-3"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-plumbing-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    123 Plumbing Street, Delhi NCR<br />
                    Serving all areas in Delhi, Noida, Gurgaon, Faridabad & Ghaziabad
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-plumbing-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-600">
                    <a href="tel:+911234567890" className="hover:text-plumbing-blue">
                      +91 123 456 7890
                    </a>
                    <br />
                    <a href="tel:+911234567891" className="hover:text-plumbing-blue">
                      +91 123 456 7891
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-plumbing-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@ncrplumbing.com" className="hover:text-plumbing-blue">
                      info@ncrplumbing.com
                    </a>
                    <br />
                    <a href="mailto:support@ncrplumbing.com" className="hover:text-plumbing-blue">
                      support@ncrplumbing.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-plumbing-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                    Emergency Service: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
