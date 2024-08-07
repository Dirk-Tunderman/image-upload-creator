import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

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
              className="w-1/3 h-[500px] border-2 border-orange-500 rounded-2xl"
              to="/pre-development"
            />
            <ServiceSection
              title="Development"
              description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
              imageSrc="/placeholder.svg"
              className="w-2/3 h-[500px] border-2 border-orange-500 rounded-2xl"
              to="/development"
            />
          </div>
          <Link to="/long-term-collaboration" className="relative overflow-hidden w-full h-[500px] bg-black text-white cursor-pointer">
            <div className="absolute inset-x-8 top-32 bottom-8 overflow-hidden">
              <img src="/testbackground.jpg" alt="Collaboration" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
              <div className="-mt-[18px]">
                <h3 className="text-3xl font-bold mb-2">Long term collaboration</h3>
                <p className="text-xl">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <div className="bg-black text-white rounded-lg overflow-hidden">
          <h2 className="text-4xl font-bold p-8 sticky top-0 bg-black z-20">What to choose?</h2>
          <TableComponent tableData={tableData} />
        </div>
      </div>
      <CompanyProfiles />
    </div>
  );
};

const TableRow = ({ row, index, isVisible }) => {
  return (
    <tr
      className={`border border-gray-700 bg-black transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <td className="py-2 px-4">{row.description}</td>
      <td className="text-center py-2 px-4">{renderCheckmark(row.veloxforce)}</td>
      <td className="text-center py-2 px-4">{renderCheckmark(row.regular)}</td>
      <td className="text-center py-2 px-4">{renderCheckmark(row.hiring)}</td>
    </tr>
  );
};

const TableComponent = ({ tableData }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div className="overflow-x-auto max-h-[500px] scrollbar-hide" ref={ref}>
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-10">
          <tr className="bg-black">
            <th className="w-1/2 text-left py-2 px-4"></th>
            <th className="w-1/6 text-center py-2 px-4">Veloxforce solutions</th>
            <th className="w-1/6 text-center py-2 px-4">Regular software</th>
            <th className="w-1/6 text-center py-2 px-4">Hiring more employees</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <TableRow key={index} row={row} index={index} isVisible={inView} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const renderCheckmark = (value) => {
  return value ? (
    <span className="text-green-400">●</span>
  ) : (
    <span className="text-red-400">○</span>
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
  {
    description: "DOES YOUR SOFTWARE ADAPT TO YOUR BUSINESS NEEDS, OR ARE YOU ADAPTING TO YOUR SOFTWARE?",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Veloxforce solutions are tailored to your specific business processes, ensuring optimal efficiency and effectiveness in your operations.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Off-the-shelf software often requires businesses to change their processes to fit the software, potentially disrupting established workflows.",
    veloxforce: false,
    regular: true,
    hiring: false,
  },
  {
    description: "Adding more staff doesn't address underlying inefficiencies in your software systems, potentially exacerbating existing problems.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
  {
    description: "Veloxforce solutions offer scalability, growing with your business without the need for constant software replacements or upgrades.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
];

const CompanyProfile = ({ step, title, description, imageSrc }) => (
  <div className="bg-gray-900 rounded-lg p-6">
    <p className="text-sm text-gray-400 mb-2">Step {step}</p>
    <h3 className="text-2xl font-bold mb-2 flex items-center">
      {title} <span className="ml-2">↗</span>
    </h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
    </div>
  </div>
);

const CompanyProfiles = () => (
  <div className="mt-16 bg-black text-white p-8 rounded-lg">
    <div className="flex mb-8">
      <div className="w-2/5 pr-8">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-500">Company</span> profiles
          <br />
          we work with
        </h2>
        <p className="mt-4 text-gray-300">
          We collaborate with various company profiles to deliver tailored solutions that meet their unique needs and challenges.
        </p>
      </div>
      <div className="w-3/5 space-y-6">
        <CompanyProfile
          step={1}
          title="Veloxforce solutions"
          description="Veloxforce solutions provides a competitive advantage by enabling unique, value-adding features that differentiate the company."
          imageSrc="/placeholder.svg"
        />
        <CompanyProfile
          step={2}
          title="Regular software"
          description="Cut through the clutter, grab your audience's attention, and turn passive onlookers into active participants."
          imageSrc="/placeholder.svg"
        />
        <CompanyProfile
          step={3}
          title="Hiring more employees"
          description="Cut through the clutter, grab your audience's attention, and turn passive onlookers into active participants."
          imageSrc="/placeholder.svg"
        />
      </div>
    </div>
  </div>
);

export default Index;
