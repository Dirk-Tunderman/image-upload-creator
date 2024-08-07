import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ServiceSection = ({ title, description, imageSrc, className, to, direction }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <Link to={to} className={`relative overflow-hidden ${className} cursor-pointer`}>
        <img src={imageSrc} alt={title} className="w-full h-full object-cover absolute inset-0" />
        <div className="relative z-10 p-8 h-full flex flex-col">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

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
            direction="left"
          />
          <div className="flex gap-4">
            <ServiceSection
              title="Pre-Development"
              description="Before technology is implemented at a client site, we work with you to develop a strategy to ensure that your business always stays ahead of the curve."
              imageSrc="/placeholder.svg"
              className="w-1/3 h-[500px] border-2 border-orange-500 rounded-2xl"
              to="/pre-development"
              direction="left"
            />
            <ServiceSection
              title="Development"
              description="In the development phase we will have constant communication to ensure that the project is constructed to your business needs."
              imageSrc="/placeholder.svg"
              className="w-2/3 h-[500px] border-2 border-orange-500 rounded-2xl"
              to="/development"
              direction="right"
            />
          </div>
          <ServiceSection
            title="Long Term Collaboration"
            description="We provide a better experience for your website and digital marketing needs with long-term thinking."
            imageSrc="/testbackground.jpg"
            className="relative overflow-hidden w-full h-[500px] bg-black text-white cursor-pointer"
            to="/long-term-collaboration"
            direction="right"
          >
            <div className="absolute inset-x-8 top-32 bottom-8 overflow-hidden">
              <img src="/testbackground.jpg" alt="Collaboration" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
              <div className="-mt-[18px]">
                <h3 className="text-3xl font-bold mb-2">Long term collaboration</h3>
                <p className="text-xl">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
              </div>
            </div>
          </ServiceSection>
        </div>
      </div>
    <div className="mt-16 ">
          <div className="bg-black text-white rounded-lg overflow-hidden ">
            <h2 className="text-4xl font-bold p-8 sticky top-0 bg-black z-20">What to choose?</h2>
            <TableComponent tableData={tableData} />
          </div>
        </div>
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

export default Index;
