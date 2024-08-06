// Update this page (the content is just a fallback if you fail to update the page)

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, imageSrc }) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">What can you expect?</h1>
        <h2 className="text-6xl font-bold text-orange-500 mb-12">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Consultation"
            description="Our goal here is to get to know how your business operates, diagnose pain points and start your business needs to take to the next level."
            imageSrc="/placeholder.svg"
          />
          <ServiceCard
            title="Pre-Development"
            description="Before technology is implemented at a client site, we work with you to develop a strategy to ensure that your business always stays ahead of the curve."
            imageSrc="/placeholder.svg"
          />
          <ServiceCard
            title="Development"
            description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
            imageSrc="/placeholder.svg"
          />
        </div>
        
        <div className="mt-12">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Long term collaboration</h3>
              <p className="text-gray-300">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
              <img src="/placeholder.svg" alt="Collaboration" className="w-full h-64 object-cover mt-4 rounded-lg" />
              <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
