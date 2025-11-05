import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const StudentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState(searchParams.get('course') || 'all');

  // Mock student data
  const allStudents = [
    { id: 1, name: 'Alice Johnson', email: 'alice@university.edu', course: 'math', year: 'Sophomore', gpa: 3.8 },
    { id: 2, name: 'Bob Smith', email: 'bob@university.edu', course: 'science', year: 'Junior', gpa: 3.6 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@university.edu', course: 'math', year: 'Senior', gpa: 3.9 },
    { id: 4, name: 'Diana Prince', email: 'diana@university.edu', course: 'science', year: 'Freshman', gpa: 3.7 },
    { id: 5, name: 'Edward Davis', email: 'edward@university.edu', course: 'computer-science', year: 'Junior', gpa: 3.5 },
    { id: 6, name: 'Fiona Wilson', email: 'fiona@university.edu', course: 'math', year: 'Sophomore', gpa: 3.8 },
    { id: 7, name: 'George Miller', email: 'george@university.edu', course: 'science', year: 'Senior', gpa: 3.4 },
    { id: 8, name: 'Hannah Taylor', email: 'hannah@university.edu', course: 'computer-science', year: 'Junior', gpa: 3.9 },
    { id: 9, name: 'Ian Anderson', email: 'ian@university.edu', course: 'math', year: 'Freshman', gpa: 3.6 },
    { id: 10, name: 'Julia Martinez', email: 'julia@university.edu', course: 'science', year: 'Sophomore', gpa: 3.7 },
    { id: 11, name: 'Kevin Lee', email: 'kevin@university.edu', course: 'computer-science', year: 'Senior', gpa: 3.8 },
    { id: 12, name: 'Luna Rodriguez', email: 'luna@university.edu', course: 'math', year: 'Junior', gpa: 3.9 },
    { id: 13, name: 'Michael Chen', email: 'michael@university.edu', course: 'science', year: 'Sophomore', gpa: 3.5 },
    { id: 14, name: 'Natalie White', email: 'natalie@university.edu', course: 'computer-science', year: 'Freshman', gpa: 3.7 },
    { id: 15, name: 'Oliver Kim', email: 'oliver@university.edu', course: 'math', year: 'Senior', gpa: 3.6 }
  ];

  const courses = [
    { value: 'all', label: 'All Courses' },
    { value: 'math', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'computer-science', label: 'Computer Science' }
  ];

  // Filter students based on course
  const filteredStudents = selectedCourse === 'all' 
    ? allStudents 
    : allStudents.filter(student => student.course === selectedCourse);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    if (course === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ course });
    }
  };

  // Update selected course when URL changes
  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam && courseParam !== selectedCourse) {
      setSelectedCourse(courseParam);
    }
  }, [searchParams, selectedCourse]);

  const getGradeColor = (gpa) => {
    if (gpa >= 3.7) return 'bg-green-100 text-green-800';
    if (gpa >= 3.5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getCourseLabel = (course) => {
    const courseObj = courses.find(c => c.value === course);
    return courseObj ? courseObj.label : course;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Students Directory</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Showing {filteredStudents.length} students</span>
          </div>
        </div>

        {/* Course Filter */}
        <div className="flex flex-wrap gap-2">
          {courses.map((course) => (
            <button
              key={course.value}
              onClick={() => handleCourseChange(course.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                selectedCourse === course.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {course.label}
            </button>
          ))}
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Link
            key={student.id}
            to={`/dashboard/students/${student.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-6 block"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                <p className="text-sm text-gray-600">{student.email}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Course:</span>
                <span className="text-sm font-medium text-gray-900">
                  {getCourseLabel(student.course)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Year:</span>
                <span className="text-sm font-medium text-gray-900">{student.year}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">GPA:</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getGradeColor(student.gpa)}`}>
                  {student.gpa}
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
          <p className="text-gray-600">Try selecting a different course filter.</p>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
