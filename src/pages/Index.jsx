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
          <div className="absolute inset-x-10 top-28 bottom-10 overflow-hidden"> {/* Modified this line */}
            <img src="/testbackground.jpg" alt="Collaboration" className="w-full h-full object-cover opacity-70" />
          </div>
          <div className="relative z-10 p-11 h-full flex flex-col justify-start"> {/* Modified this line */}
          <div className="-mt-7"> {/* Added this wrapper div */}
            <h3 className="text-3xl font-bold mb-2">Growth partnership</h3>
            <p className="text-xl">We provide a better experience for your website and digital marketing needs with long-term thinking.</p>
          </div>
        </div>
        </Link>
        </div>

        <div className="mt-16 bg-black text-white p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">What to choose ?</h2>
          <div className="relative overflow-hidden" style={{ height: '400px' }}>
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-black z-10">
                <tr>
                  <th className="w-1/2 text-left py-2 px-4 border border-gray-700">What to choose ?</th>
                  <th className="w-1/6 text-center py-2 px-4 border border-gray-700">Veloxforce solutions</th>
                  <th className="w-1/6 text-center py-2 px-4 border border-gray-700">Regular software</th>
                  <th className="w-1/6 text-center py-2 px-4 border border-gray-700">Hiring more employees</th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto" style={{ height: '350px', display: 'block' }}>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border border-gray-700">{row.description}</td>
                    <td className="text-center py-2 px-4 border border-gray-700">{renderCheckmark(row.veloxforce)}</td>
                    <td className="text-center py-2 px-4 border border-gray-700">{renderCheckmark(row.regular)}</td>
                    <td className="text-center py-2 px-4 border border-gray-700">{renderCheckmark(row.hiring)}</td>
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
    <span className="text-orange-500">●</span>
  ) : (
    <span className="text-gray-500">○</span>
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
    description: "Provides a competitive advantage by enabling unique, value-adding features that differentiate the company.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Customizable solutions tailored to your specific business needs and processes.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Seamless integration with existing workflows, automating data transfer and synchronization.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Scalable solutions that grow with your business without significant additional costs.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Continuous updates and improvements based on industry trends and client feedback.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "Dedicated support team familiar with your specific implementation.",
    veloxforce: true,
    regular: false,
    hiring: false,
  },
  {
    description: "One-size-fits-all approach limiting customization and efficiency.",
    veloxforce: false,
    regular: true,
    hiring: false,
  },
  {
    description: "Businesses need to adapt their processes to software constraints.",
    veloxforce: false,
    regular: true,
    hiring: false,
  },
  {
    description: "Limited integration capabilities with existing systems.",
    veloxforce: false,
    regular: true,
    hiring: false,
  },
  {
    description: "Increased salaries and overhead costs.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
  {
    description: "Reduced profit margins due to higher operational costs.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
  {
    description: "Limited investment in innovation due to higher personnel costs.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
  {
    description: "Potential inconsistencies in processes and data management.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
  {
    description: "Challenges in maintaining consistent quality across a larger workforce.",
    veloxforce: false,
    regular: false,
    hiring: true,
  },
];

export default Index;
