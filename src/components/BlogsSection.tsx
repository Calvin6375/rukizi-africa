import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const BlogsSection = () => {
  const blogs = [
    {
      image: blog1,
      date: "14/07/2024",
      title: "5 exciting messages that are costing your customers",
      description: "Something we get to the good of you at something we get to the good of you at something we get to the good"
    },
    {
      image: blog2,
      date: "14/07/2024", 
      title: "5 exciting messages that are costing your customers",
      description: "Something we get to the good of you at something we get to the good of you at something we get to the good"
    },
    {
      image: blog3,
      date: "14/07/2024",
      title: "5 exciting messages that are costing your customers", 
      description: "Something we get to the good of you at something we get to the good of you at something we get to the good"
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Blogs and Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since 2023 we have some collection of global users to their digital never journey.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-8 py-4 group">
            View All Blogs
            <div className="ml-3 w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <ArrowRight className="h-4 w-4 text-black" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;