import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Brand strategy",
      description: "At our communication company, we take pride and passion in building truly great for our clients.",
      cta: "Ready to start"
    },
    {
      title: "Brand strategy", 
      description: "At our communication company, we take pride and passion in building truly great for our clients.",
      cta: "Ready to start"
    },
    {
      title: "Brand strategy",
      description: "At our communication company, we take pride and passion in building truly great for our clients.", 
      cta: "Ready to start"
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            What do we offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since 2023 we have some collection of global users to their digital never journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-b from-gray-100 to-gray-900 text-white p-8 rounded-2xl h-80 flex flex-col justify-between border-none shadow-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto">
                <Button variant="ghost" className="text-white hover:text-black hover:bg-white p-0 font-medium">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-8 py-4 group">
            View all Services
            <div className="ml-3 w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <ArrowRight className="h-4 w-4 text-black" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;