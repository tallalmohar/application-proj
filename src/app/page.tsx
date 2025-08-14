import { courseInfo, projects } from "@/data/courseInfo";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              {courseInfo.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-4 font-medium">
              Instructor: {courseInfo.instructor}
            </p>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-2 text-balance">
              Build professional-quality software tools that make a real
              difference in people's lives
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Eligibility Criteria Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2 text-balance">
            Is CMPT 415 for you?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Good Fit Criteria */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 sm:p-8 card-hover shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-green-800">
                  Great choice if you...
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {courseInfo.goodFitCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
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
                    <span className="ml-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Poor Fit Criteria */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 sm:p-8 card-hover shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-amber-800 leading-tight text-balance">
                  Better off doing a different course if you...
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {courseInfo.poorFitCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-4 w-4 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prerequisites Section */}
          <div className="mt-8 sm:mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 sm:p-8 card-hover shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-6">
              Prerequisites & Selection
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                  GPA Requirements
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {courseInfo.prerequisites.gpa}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                  Experience Expected
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {courseInfo.prerequisites.experience}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                  Relevant Courses
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {courseInfo.prerequisites.relevantCourses}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                  Selection Process
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {courseInfo.prerequisites.selectionProcess}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2 text-balance">
            Course Structure & Expectations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Meeting Format Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm card-hover">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Meeting Format
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {courseInfo.courseStructure.meeting}
              </p>
            </div>

            {/* Time Commitment Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm card-hover">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Time Commitment
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-medium text-gray-900">
                    Weekly Hours:
                  </span>{" "}
                  {courseInfo.courseStructure.weeklyHours}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {courseInfo.courseStructure.timeCommitment}
                </p>
              </div>
            </div>

            {/* Assessment Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm card-hover">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Assessment
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {courseInfo.courseStructure.assessment}
              </p>
            </div>

            {/* Licensing Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm card-hover">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Licensing
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {courseInfo.courseStructure.licensing}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2 text-balance">
            Available Projects
          </h2>

          <div className="mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-2">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-balance">
              Choose from two impactful projects that are making a real
              difference in people's lives. Both projects involve working with
              real customers and deploying software that will be actively used
              to help communities around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
