"use client";

import { useState } from "react";

interface Project {
  id: string;
  name: string;
  studentsNeeded: number;
  semester: string;
  description: string;
  impact: string;
  techStack: string[];
  developmentNeeds: string[];
  necessarySkills: string[];
  usefulExperience: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm card-hover">
      {/* Project Header */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight text-balance">
          {project.name}
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {project.studentsNeeded} students needed
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            {project.semester}
          </span>
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-6">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-balance">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Preview */}
      <div className="mb-6">
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">
          Tech Stack:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-200"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 border border-gray-200">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Impact Preview */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
              Real-World Impact
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {project.impact.length > 120
                ? `${project.impact.substring(0, 120)}...`
                : project.impact}
            </p>
          </div>
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <div className="border-t border-gray-100 pt-6 mt-6">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border border-transparent rounded-xl hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation btn-primary shadow-sm"
          aria-expanded={showDetails}
          aria-controls={`project-details-${project.id}`}
        >
          <span>{showDetails ? "Hide Details" : "Show Details"}</span>
          <svg
            className={`ml-3 h-5 w-5 transform transition-transform duration-300 ${
              showDetails ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Expandable Details Section */}
      <div
        id={`project-details-${project.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showDetails ? "max-h-10000 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-6 space-y-6 sm:space-y-8 border-t border-gray-100 mt-6">
          {/* Complete Tech Stack */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
              Complete Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Required Skills */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
              Required Skills
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {project.necessarySkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mr-3 mt-0.5">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Experience */}
          {project.usefulExperience && project.usefulExperience.length > 0 && (
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                Useful Experience
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.usefulExperience.map((experience, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-200"
                  >
                    {experience}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Development Needs */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
              Development Needs
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {project.developmentNeeds.map((need, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-blue-100 rounded-full mr-3 mt-0.5">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {need}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
