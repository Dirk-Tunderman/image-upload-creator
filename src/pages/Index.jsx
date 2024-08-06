import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const ServiceSection = ({ title, description, imageSrc, className, to }) => (
  <Link to={to} className={`relative overflow-hidden ${className} cursor-pointer`}>
    <img src={imageSrc} alt={title} className="w-full h-full object-cover absolute inset-0" />
    <div className="relative z-10 p-8 h-full flex flex-col">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  </Link>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">What can you expect?</h1>
        <h2 className="text-8xl font-bold text-orange-500 mb-12">Services</h2>
        
        <div className="space-y-8">
          <div className="flex gap-8 h-96">
            <ServiceSection
              title="Consultation"
              description="Our goal here is to get to know how your business operates, diagnose pain points and start your business needs to take to the next level."
              imageSrc="/placeholder.svg"
              className="w-1/2"
              to="/consultation"
            />
            <ServiceSection
              title="Pre-Development"
              description="Before technology is implemented at a client site, we work with you to develop a strategy to ensure that your business always stays ahead of the curve."
              imageSrc="/placeholder.svg"
              className="w-1/2"
              to="/pre-development"
            />
          </div>
          <div className="flex gap-8 h-96">
            <ServiceSection
              title="Development"
              description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
              imageSrc="/placeholder.svg"
              className="w-1/2"
              to="/development"
            />
            <ServiceSection
              title="Long term collaboration"
              description="We provide a better experience for your website and digital marketing needs with long-term thinking."
              imageSrc="/placeholder.svg"
              className="w-1/2"
              to="/long-term-collaboration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
