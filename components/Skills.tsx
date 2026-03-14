import React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<{ data: SkillsProps }> = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Skills</span>
        </h2>

        {data.skills.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-800 rounded-xl border border-gray-700 text-gray-200 hover:border-blue-500 hover:bg-gray-800/50 transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-900 rounded-2xl border border-gray-800">
            <p className="text-gray-500 italic">Skills list is currently empty.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;