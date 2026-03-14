import React from "react";

interface AboutProps {
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
}

const About: React.FC<{ data: AboutProps }> = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">About Me</span>
        </h2>
        
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {data.about}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">{data.experience}+</div>
              <div className="text-gray-400 font-medium">Years Experience</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-purple-400 mb-2">{data.currentRole}</div>
              <div className="text-gray-400 font-medium">Current Role</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold text-green-400 mb-2">{data.highlights.length}</div>
              <div className="text-gray-400 font-medium">Key Highlights</div>
            </div>
          </div>

          {data.highlights.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Highlights</h3>
              <ul className="space-y-2">
                {data.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;