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
        {/* Content sections will be added in subsequent tasks */}
        <div className="text-center text-gray-600">
          <p>Course information sections will be added here...</p>
        </div>
      </main>
    </div>
  );
}
