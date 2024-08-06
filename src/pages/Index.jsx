// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";

const ServiceSection = ({ title, description, imageSrc, className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={imageSrc} alt={title} className="w-full h-full object-cover absolute inset-0" />
    <div className="relative z-10 p-8 h-full flex flex-col">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">What can you expect?</h1>
        <h2 className="text-8xl font-bold text-orange-500 mb-12">Services</h2>
        
        <div className="space-y-8">
          <ServiceSection
            title="Consultation"
            description="Our goal here is to get to know how your business operates, diagnose pain points and start your business needs to take to the next level."
            imageSrc="/placeholder.svg"
            className="w-full h-96"
          />
          <div className="flex gap-8 h-96">
            <ServiceSection
              title="Pre-Development"
              description="Before technology is implemented at a client site, we work with you to develop a strategy to ensure that your business always stays ahead of the curve."
              imageSrc="/placeholder.svg"
              className="w-1/3"
            />
            <ServiceSection
              title="Development"
              description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
              imageSrc="/placeholder.svg"
              className="w-2/3"
            />
          </div>
          <div className="relative overflow-hidden w-full h-96 bg-gray-900 text-white">
            <img src="/placeholder.svg" alt="Collaboration" className="w-full h-full object-cover absolute inset-0 opacity-50" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Long term collaboration</h3>
                <p className="text-xl">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
              </div>
              <Button className="self-start mt-6 bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
