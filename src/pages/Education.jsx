
import React from "react";
import {
  FaUniversity,
  FaLaptopCode,
  FaSchool,
} from "react-icons/fa";

// ==================== Education Data ====================

const educationData = [
  {
    id: 1,
    icon: <FaUniversity size={24} className="text-[#4B7BE5]" />,
    title: "B.Sc in Computer Science & Engineering",
    institution: "Daffodil International University, Dhaka",
    duration: "2023 – Present",
    result: "Current CGPA: 3.70",
    degree: "B.Sc. in CSE",
    grade: "3.70",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={24} className="text-[#4B7BE5]" />,
    title: "Diploma in Engineering (Computer Technology)",
    institution: "Khulna Mohila Polytechnic Institute",
    duration: "2016 – 2020",
    result: "CGPA: 3.75",
    degree: "Diploma in Computer Technology",
    grade: "3.75",
  },
  {
    id: 3,
    icon: <FaSchool size={24} className="text-[#4B7BE5]" />,
    title: "Secondary School Certificate (Science)",
    institution: "Govt. Coronation Secondary Girls' School, Khulna",
    duration: "2015",
    result: "GPA: 4.50",
    degree: "SSC (Science)",
    grade: "4.50",
  },
];

// ==================== Education Component ====================

const Education = () => {
  return (
    <section id="education" className="page-container">

      {/* ==================== Page Heading ==================== */}

      <h2 className="page-heading">
        Education
      </h2>

      {/* ==================== Education Cards ==================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="
              bg-white dark:bg-[#1A1A40]
              border border-gray-200 dark:border-gray-700
              rounded-xl shadow-sm hover:shadow-lg
              transition-all duration-300
              p-5 flex flex-col gap-3
            "
          >

            {/* Education Icon and Title */}

            <div className="flex items-start gap-3">

              <div
                className="
                  bg-[#A3E4DB]
                  dark:bg-[#4B7BE5]/20
                  p-3 rounded-xl shrink-0
                "
              >
                {edu.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#4B7BE5] leading-snug">
                {edu.title}
              </h3>

            </div>

            {/* Institution */}

            <p className="text-[#333333] dark:text-gray-300 font-medium leading-relaxed">
              {edu.institution}
            </p>

            {/* Duration */}

            <p className="text-sm text-[#4A4A4A] dark:text-gray-400">
              {edu.duration}
            </p>

            {/* Academic Result */}

            <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">

              <span
                className="
                  inline-block px-3 py-1.5
                  rounded-md text-sm font-semibold
                  bg-[#A3E4DB]/40 text-[#1A1A40]
                  dark:bg-[#4B7BE5]/20 dark:text-[#A3E4DB]
                "
              >
                {edu.result}
              </span>

            </div>

          </div>
        ))}

      </div>

      {/* ==================== Academic Summary ==================== */}

      <div className="mt-8">

        <h3
          className="text-xl md:text-2xl font-bold mb-2"
          style={{ color: "var(--accent-primary)" }}
        >
          Academic Summary
        </h3>

        <p
          className="text-sm md:text-base mb-4"
          style={{ color: "var(--text-sub)" }}
        >
          A summary of my academic qualifications, study duration
          and academic achievements.
        </p>

        {/* Responsive Table Container */}

        <div
          className="
            overflow-x-auto rounded-xl
            border border-gray-200 dark:border-gray-700
            shadow-sm
          "
        >

          <table className="w-full min-w-[500px] border-collapse text-left">

            {/* Table Header */}

            <thead>
              <tr className="bg-[#4B7BE5] text-white">

                <th
                  scope="col"
                  className="px-5 py-3 font-semibold"
                >
                  Degree
                </th>

                <th
                  scope="col"
                  className="px-5 py-3 font-semibold"
                >
                  Duration
                </th>

                <th
                  scope="col"
                  className="px-5 py-3 font-semibold text-center"
                >
                  Result
                </th>

              </tr>
            </thead>

            {/* Table Body */}

            <tbody className="text-[#1A1A40] dark:text-gray-200">

              {educationData.map((edu, index) => (
                <tr
                  key={edu.id}
                  className={`
                    border-b border-gray-200
                    dark:border-gray-700 last:border-b-0
                    ${
                      index % 2 === 0
                        ? "bg-white dark:bg-[#1A1A40]"
                        : "bg-gray-50 dark:bg-gray-800"
                    }
                    hover:bg-[#A3E4DB]/20
                    transition-colors duration-200
                  `}
                >

                  {/* Degree */}

                  <td className="px-5 py-3.5 font-medium">
                    {edu.degree}
                  </td>

                  {/* Duration */}

                  <td className="px-5 py-3.5 whitespace-nowrap">
                    {edu.duration}
                  </td>

                  {/* Result */}

                  <td className="px-5 py-3.5 text-center font-semibold">
                    {edu.grade}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
};

export default Education;
