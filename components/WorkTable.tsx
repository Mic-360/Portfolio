"use client";

import { WorkExperience } from "@/lib/constants";
import { useEffect, useState, type FC } from "react";

interface WorkTableProps {}

const WorkTable: FC<WorkTableProps> = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust breakpoint as needed
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    handleResize(); // Check initial state

    return () => mediaQuery.removeListener(handleResize);
  }, []);
  return (
    <table className="table-auto w-full">
      <tbody>
        {WorkExperience.map((work, index) => (
          <tr
            key={index}
            className="border-[0.1px] border-l-0 border-r-0 border-gray-200 hover:bg-foreground hover:text-accent transition-all duration-300 ease-in-out"
          >
            {isSmallScreen ? (
              <>
                {/* Two-column layout for small screens */}
                <td className="p-4 font-mono tracking-tighter w-1/2">
                  <p>{work.Year}</p>
                  <p>{work.Duration}</p>
                </td>
                <td className="p-4 w-1/2">
                  <p>{work.Company}</p>
                  <p>
                    {work.Role} {work.Skills}
                  </p>
                </td>
              </>
            ) : (
              <>
                {/* Three-column layout for larger screens */}
                <td className="pl-14 p-4 font-mono tracking-tighter">
                  <p>{work.Year}</p>
                  <p>{work.Duration}</p>
                </td>
                <td className="pl-14 p-4">{work.Company}</td>
                <td className="pl-14 p-4">
                  <p>
                    {work.Role} {work.Skills}
                  </p>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default WorkTable;
