
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Gurugram",
    text: "NCR Plumbing resolved our office bathroom issue promptly. The technician was professional and explained everything clearly. Highly recommended for commercial plumbing needs.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    location: "Noida",
    text: "When my kitchen pipe burst at midnight, NCR Plumbing sent someone within an hour. They charged a fair price even for the emergency service. This company has earned my trust.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    location: "South Delhi",
    text: "We hired NCR Plumbing for our home renovation project. The team installed all new bathroom fixtures with precision. They were courteous, punctual and left the area clean.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-plumbing-blue">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read what customers throughout Delhi NCR have to say about their experience with NCR Plumbing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full shadow-lg border-none transition-transform duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
