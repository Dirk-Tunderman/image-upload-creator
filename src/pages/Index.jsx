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
        <h1 className="text-4xl font-medium mb-2">What can you expect?</h1>
        <h2 className="text-9xl font-bold text-orange-500 mb-12">Services</h2>
        
        <div className="space-y-8 flex flex-col">
          <ServiceSection
            title="Consultation"
            description="Our goal here is to get to know how your business operates, diagnose pain points and start your business needs to take to the next level."
            imageSrc="/placeholder.svg"
            className="w-full h-[500px]"
            to="/consultation"
          />
          <div className="flex gap-4">
            <ServiceSection
              title="Pre-Development"
              description="Before technology is implemented at a client site, we work with you to develop a strategy to ensure that your business always stays ahead of the curve."
              imageSrc="/placeholder.svg"
              className="w-1/3 h-[500px] border-2 border-orange-500 rounded-2xl" // Changed to rounded-3xl
              to="/pre-development"
            />
            <ServiceSection
              title="Development"
              description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
              imageSrc="/placeholder.svg"
              className="w-2/3 h-[500px] border-2 border-orange-500 rounded-2xl" // Changed to rounded-3xl
              to="/development"
            />
          </div>
          <Link to="/long-term-collaboration" className="relative overflow-hidden w-full h-[500px] bg-black text-white cursor-pointer">
            <div className="absolute inset-0 overflow-hidden">
              <img src="/testbackground.jpg" alt="Collaboration" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10 p-11 h-full flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">Growth partnership</h3>
              <p className="text-xl">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
            </div>
          </Link>
        </div>

        <div className="mt-16 p-8 rounded-lg relative">
          <h2 className="text-4xl font-bold mb-8 sticky top-0 bg-gray-100 py-4 z-10">What to choose?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead className="sticky top-16 bg-white z-10">
                <tr>
                  <th className="w-1/2 text-left py-2 px-4 border border-gray-300">What to choose?</th>
                  <th className="w-1/6 text-center py-2 px-4 border border-gray-300">Veloxforce solutions</th>
                  <th className="w-1/6 text-center py-2 px-4 border border-gray-300">Regular software</th>
                  <th className="w-1/6 text-center py-2 px-4 border border-gray-300">Hiring more employees</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border border-gray-300">{row.description}</td>
                    <td className="text-center py-2 px-4 border border-gray-300">{renderCheckmark(row.veloxforce)}</td>
                    <td className="text-center py-2 px-4 border border-gray-300">{renderCheckmark(row.regular)}</td>
                    <td className="text-center py-2 px-4 border border-gray-300">{renderCheckmark(row.hiring)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderCheckmark = (value) => {
  return value ? (
    <span className="text-green-500">●</span>
  ) : (
    <span className="text-red-500">○</span>
  );
};

const tableData = [
  {
    description: "IS YOUR SOFTWARE GIVING YOU A COMPETITIVE EDGE, OR ARE YOU BLENDING IN WITH THE CROWD?",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Veloxforce solutions provides a competitive advantage by enabling unique, value-adding features that differentiate the company, attracting more customers and driving revenue growth.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Build a one-size-fits-all approach limits customization, leaving businesses to adapt their processes to software constraints, leading to inefficiencies and reduced productivity.",
    veloxforce: false,
    regular: true,
    hiring: false,
  },
  {
    description: "Hiring more employees to compensate for inefficiencies leads to increased salaries and overhead costs, reducing profit margins and limiting investment in innovation.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
  {
    description: "Veloxforce solutions seamlessly integrate with existing workflows, automating data transfer and synchronization, reducing errors and increasing efficiency and productivity.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
];

export default Index;
