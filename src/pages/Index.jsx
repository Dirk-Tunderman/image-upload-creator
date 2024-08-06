import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, description, to }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={to}>
      <Button variant="outline">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">What can you expect?</h1>
        <h2 className="text-6xl font-bold text-orange-500 mb-12">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Consultation"
            description="We get to know your business, diagnose pain points, and identify opportunities for growth."
            to="/consultation"
          />
          <ServiceCard
            title="Pre-Development"
            description="We develop strategies to keep your business ahead of the curve before implementing any technology."
            to="/pre-development"
          />
          <ServiceCard
            title="Development"
            description="Constant communication ensures the project is built to meet your specific business needs."
            to="/development"
          />
          <ServiceCard
            title="Long-term Collaboration"
            description="We provide ongoing support for your website and digital marketing needs with a long-term perspective."
            to="/long-term-collaboration"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
