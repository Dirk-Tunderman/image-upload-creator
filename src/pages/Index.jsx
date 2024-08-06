// Update this page (the content is just a fallback if you fail to update the page)

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, imageSrc, className }) => (
  <Card className={`overflow-hidden ${className}`}>
    <CardContent className="p-0 flex flex-col h-full">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">What can you expect?</h1>
        <h2 className="text-8xl font-bold text-orange-500 mb-12">Services</h2>
        
        <div className="space-y-8">
          <ServiceCard
            title="Consultation"
            description="Our goal here is to get to know how your business operates, diagnose pain points and start your business needs to take to the next level."
            imageSrc="/placeholder.svg"
            className="w-full"
          />
          <div className="flex gap-8">
            <ServiceCard
              title="Pre-Development"
              description="Before technology is implemented at a client site, we work with you to develop a strategy to ensure that your business always stays ahead of the curve."
              imageSrc="/placeholder.svg"
              className="w-[30%]"
            />
            <ServiceCard
              title="Development"
              description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
              imageSrc="/placeholder.svg"
              className="w-[70%]"
            />
          </div>
          <Card className="bg-gray-900 text-white w-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Long term collaboration</h3>
              <p className="text-gray-300">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
              <img src="/placeholder.svg" alt="Collaboration" className="w-full h-64 object-cover mt-4" />
              <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
