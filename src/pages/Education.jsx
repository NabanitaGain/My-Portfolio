
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

// ==================== Education Component ====================

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10"
    >

      {/* ==================== Education Heading ==================== */}

      <h2
        className="text-4xl font-bold mb-6"
        style={{ color: "var(--accent-primary)" }}
      >
        Education
      </h2>

      {/* ==================== Education Cards ==================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white dark:bg-[#1A1A40]
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-sm hover:shadow-md
            transition duration-300 p-6 flex flex-col gap-4"
          >

            {/* Education Icon and Title */}

            <div className="flex items-center gap-3">

              <div className="bg-[#A3E4DB] dark:bg-[#4B7BE5]/20 p-2 rounded-full shrink-0">
                {edu.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#4B7BE5]">
                {edu.title}
              </h3>

            </div>

            {/* Institution */}

            <p className="text-[#333333] dark:text-gray-300 font-medium">
              {edu.institution}
            </p>

            {/* Duration */}

            <p className="text-sm text-[#4A4A4A] dark:text-gray-400">
              {edu.duration}
            </p>

            {/* Academic Result */}

            <p className="text-sm font-semibold text-[#1A1A40] dark:text-white">
              {edu.result}
            </p>

          </div>
        ))}

      </div>

      {/* ==================== Academic Summary Table ==================== */}

      <div className="mt-12">

        <h3 className="text-2xl font-bold text-[#4B7BE5] mb-5">
          Academic Summary
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
          A summary of my academic qualifications, study duration
          and academic achievements.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm">

          <table className="w-full min-w-[500px] border-collapse text-left">

            {/* Table Header */}

            <thead>
              <tr className="bg-[#4B7BE5] text-white">

                <th
                  scope="col"
                  className="border border-gray-300 dark:border-gray-700 p-4"
                >
                  Degree
                </th>

                <th
                  scope="col"
                  className="border border-gray-300 dark:border-gray-700 p-4"
                >
                  Duration
                </th>

                <th
                  scope="col"
                  className="border border-gray-300 dark:border-gray-700 p-4"
                >
                  Result
                </th>

              </tr>
            </thead>

            {/* Table Body */}

            <tbody className="text-[#1A1A40] dark:text-gray-200">

              {/* B.Sc. */}

              <tr className="bg-white dark:bg-[#1A1A40] hover:bg-[#A3E4DB]/20 transition-colors">

                <td className="border border-gray-300 dark:border-gray-700 p-4 font-medium">
                  B.Sc. in CSE
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-4">
                  2023 – Present
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">
                  3.70
                </td>

              </tr>

              {/* Diploma */}

              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-[#A3E4DB]/20 transition-colors">

                <td className="border border-gray-300 dark:border-gray-700 p-4 font-medium">
                  Diploma in Computer Technology
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-4">
                  2016 – 2020
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">
                  3.75
                </td>

              </tr>

              {/* SSC */}

              <tr className="bg-white dark:bg-[#1A1A40] hover:bg-[#A3E4DB]/20 transition-colors">

                <td className="border border-gray-300 dark:border-gray-700 p-4 font-medium">
                  SSC (Science)
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-4">
                  2015
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">
                  4.50
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
};

export default Education;
