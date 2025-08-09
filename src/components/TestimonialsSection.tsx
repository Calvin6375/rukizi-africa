import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nick Ross",
      company: "across 4 countries, 20% increment revenue",
      rating: 5,
      review: "I am proud to introduce Nick as one of our most and trusted partners. In my experience working with Nick I have found that he consistently has the best interests of his clients at heart and when I introduce him to clients I..."
    },
    {
      name: "Nick Ross", 
      company: "across 4 countries, 20% increment revenue",
      rating: 5,
      review: "I am proud to introduce Nick as one of our most and trusted partners. In my experience working with Nick I have found that he consistently has the best interests of his clients at heart and when I introduce him to clients I..."
    },
    {
      name: "Nick Ross",
      company: "across 4 countries, 20% increment revenue", 
      rating: 5,
      review: "I am proud to introduce Nick as one of our most and trusted partners. In my experience working with Nick I have found that he consistently has the best interests of his clients at heart and when I introduce him to clients I..."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Testimonials & Social Proofs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See Our Recent "Bake Artisan"
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonial.review}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-medium">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black hover:bg-white rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black hover:bg-white rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;