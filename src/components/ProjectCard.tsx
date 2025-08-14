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
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200">
      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-blue-600 font-medium">
          Looking for {project.studentsNeeded} students • {project.semester}
        </p>
      </div>

      {/* Project Description */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </div>

      {/* Tech Stack Preview */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Impact Preview */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-green-600 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              Real-World Impact
            </h4>
            <p className="text-sm text-gray-600">
              {project.impact.length > 120
                ? `${project.impact.substring(0, 120)}...`
                : project.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
