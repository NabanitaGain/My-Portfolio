import React from "react";
import { FaUniversity, FaLaptopCode, FaSchool } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    icon: <FaUniversity size={24} className="text-[#4B7BE5]" />,
    title: "B.Sc in Computer Science & Engineering",
    institution: "Daffodil International University, Dhaka",
    duration: "2023 – Present",
    result: "Current CGPA: 3.70",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={24} className="text-[#4B7BE5]" />,
    title: "Diploma in Engineering (Computer Technology)",
    institution: "Khulna Mohila Polytechnic Institute",
    duration: "2016 – 2020",
    result: "CGPA: 3.75",
  },
  {
    id: 3,
    icon: <FaSchool size={24} className="text-[#4B7BE5]" />,
    title: "Secondary School Certificate (Science)",
    institution: "Govt. Coronation Secondary Girls' School, Khulna",
    duration: "2015",
    result: "GPA: 4.50",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10"
    >
      <h2
        className="text-4xl font-bold mb-12 ml-[-60px]"
        style={{ color: "var(--accent-primary)" }}
      >
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[-55px] mr-[-60px] ">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white dark:bg-[#1A1A40] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#A3E4DB] dark:bg-[#4B7BE5] p-2 rounded-full">
                {edu.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#4B7BE5]">{edu.title}</h3>
            </div>
            <p className="text-[#333333] dark:text-gray-300 font-medium">
              {edu.institution}
            </p>
            <p className="text-sm text-[#4A4A4A] dark:text-gray-400">{edu.duration}</p>
            <p className="text-sm font-semibold text-[#1A1A40] dark:text-white">
              {edu.result}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
