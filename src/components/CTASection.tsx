import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Building Businesses and
            <br />
            <span className="block">a Personal Brand</span>
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-8 py-4 text-lg font-medium">
            Book a personal consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;