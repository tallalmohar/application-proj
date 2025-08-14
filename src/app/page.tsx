import { courseInfo } from "@/data/courseInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {courseInfo.title}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-2">
              Instructor: {courseInfo.instructor}
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Build professional-quality software tools that make a real
              difference in people's lives
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Eligibility Criteria Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Is CMPT 415 for you?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good Fit Criteria */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-green-800">
                  Great choice if you...
                </h3>
              </div>
              <ul className="space-y-3">
                {courseInfo.goodFitCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Poor Fit Criteria */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-yellow-800">
                  Better off doing a different course if you...
                </h3>
              </div>
              <ul className="space-y-3">
                {courseInfo.poorFitCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-4 w-4 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prerequisites Section */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Prerequisites & Selection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  GPA Requirements
                </h4>
                <p className="text-gray-700 text-sm">
                  {courseInfo.prerequisites.gpa}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Experience Expected
                </h4>
                <p className="text-gray-700 text-sm">
                  {courseInfo.prerequisites.experience}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Relevant Courses
                </h4>
                <p className="text-gray-700 text-sm">
                  {courseInfo.prerequisites.relevantCourses}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Selection Process
                </h4>
                <p className="text-gray-700 text-sm">
                  {courseInfo.prerequisites.selectionProcess}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Course Structure & Expectations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meeting Format Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Meeting Format
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {courseInfo.courseStructure.meeting}
              </p>
            </div>

            {/* Time Commitment Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Time Commitment
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium text-gray-900">
                    Weekly Hours:
                  </span>{" "}
                  {courseInfo.courseStructure.weeklyHours}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {courseInfo.courseStructure.timeCommitment}
                </p>
              </div>
            </div>

            {/* Assessment Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Assessment
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {courseInfo.courseStructure.assessment}
              </p>
            </div>

            {/* Licensing Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Licensing
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {courseInfo.courseStructure.licensing}
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder for other sections */}
        <div className="text-center text-gray-600">
          <p>Additional course information sections will be added here...</p>
        </div>
      </main>
    </div>
  );
}
