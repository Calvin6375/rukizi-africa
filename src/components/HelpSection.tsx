import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HelpSection = () => {
  const services = [
    {
      title: "Cutting Down hours",
      description: "Clipping, colouring a considerable focus for consultancy that is in fact as important as finding the right venue."
    },
    {
      title: "Recruiting great people", 
      description: "Clipping, colouring a considerable focus for consultancy that is in fact as important as finding the right venue."
    },
    {
      title: "Tracking Marketing ROI",
      description: "Clipping, colouring a considerable focus for consultancy that is in fact as important as finding the right venue."
    },
    {
      title: "Tracking Marketing ROI",
      description: "Clipping, colouring a considerable focus for consultancy that is in fact as important as finding the right venue."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            How Could We Help You?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since 2023 we have some collection of global users to their digital never journey.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Services 1 & 2 */}
          <div className="space-y-8">
            {services.slice(0, 2).map((service, index) => (
              <Card key={index} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black hover:bg-gray-100 rounded-full">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/assets/Professional.png"
                alt="Professional consultant" 
                className="w-full h-auto max-w-sm rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Right Column - Services 3 & 4 */}
          <div className="space-y-8">
            {services.slice(2, 4).map((service, index) => (
              <Card key={index + 2} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-black hover:bg-gray-100 rounded-full">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-8 py-4 group">
            View All Services
            <div className="ml-3 w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <ArrowRight className="h-4 w-4 text-black" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;