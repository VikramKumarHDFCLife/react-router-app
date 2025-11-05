import { useParams, Link } from 'react-router-dom';

const StudentDetailPage = () => {
  const { id } = useParams();

  // Mock student data - creating comprehensive profiles for all students
  const getStudentData = (id) => {
    const baseStudents = {
      1: { name: 'Alice Johnson', email: 'alice@university.edu', course: 'math', year: 'Sophomore', gpa: 3.8 },
      2: { name: 'Bob Smith', email: 'bob@university.edu', course: 'science', year: 'Junior', gpa: 3.6 },
      3: { name: 'Charlie Brown', email: 'charlie@university.edu', course: 'math', year: 'Senior', gpa: 3.9 },
      4: { name: 'Diana Prince', email: 'diana@university.edu', course: 'science', year: 'Freshman', gpa: 3.7 },
      5: { name: 'Edward Davis', email: 'edward@university.edu', course: 'computer-science', year: 'Junior', gpa: 3.5 },
      6: { name: 'Fiona Wilson', email: 'fiona@university.edu', course: 'math', year: 'Sophomore', gpa: 3.8 },
      7: { name: 'George Miller', email: 'george@university.edu', course: 'science', year: 'Senior', gpa: 3.4 },
      8: { name: 'Hannah Taylor', email: 'hannah@university.edu', course: 'computer-science', year: 'Junior', gpa: 3.9 },
      9: { name: 'Ian Anderson', email: 'ian@university.edu', course: 'math', year: 'Freshman', gpa: 3.6 },
      10: { name: 'Julia Martinez', email: 'julia@university.edu', course: 'science', year: 'Sophomore', gpa: 3.7 },
      11: { name: 'Kevin Lee', email: 'kevin@university.edu', course: 'computer-science', year: 'Senior', gpa: 3.8 },
      12: { name: 'Luna Rodriguez', email: 'luna@university.edu', course: 'math', year: 'Junior', gpa: 3.9 },
      13: { name: 'Michael Chen', email: 'michael@university.edu', course: 'science', year: 'Sophomore', gpa: 3.5 },
      14: { name: 'Natalie White', email: 'natalie@university.edu', course: 'computer-science', year: 'Freshman', gpa: 3.7 },
      15: { name: 'Oliver Kim', email: 'oliver@university.edu', course: 'math', year: 'Senior', gpa: 3.6 }
    };

    const base = baseStudents[id];
    if (!base) return null;

    const yearToEnrollment = {
      'Freshman': 'August 2024',
      'Sophomore': 'August 2023', 
      'Junior': 'August 2022',
      'Senior': 'August 2021'
    };

    const courseSets = {
      'math': [
        { code: 'MATH201', name: 'Calculus II', credits: 4, grade: 'A' },
        { code: 'MATH301', name: 'Linear Algebra', credits: 3, grade: 'A-' },
        { code: 'STAT201', name: 'Statistics', credits: 3, grade: 'B+' },
        { code: 'CS101', name: 'Intro to Programming', credits: 3, grade: 'A' }
      ],
      'science': [
        { code: 'CHEM301', name: 'Organic Chemistry', credits: 4, grade: 'B+' },
        { code: 'PHYS201', name: 'Physics II', credits: 4, grade: 'A-' },
        { code: 'BIO301', name: 'Molecular Biology', credits: 3, grade: 'B' },
        { code: 'CHEM401', name: 'Physical Chemistry', credits: 3, grade: 'A' }
      ],
      'computer-science': [
        { code: 'CS301', name: 'Data Structures', credits: 4, grade: 'A' },
        { code: 'CS350', name: 'Database Systems', credits: 3, grade: 'A-' },
        { code: 'CS400', name: 'Software Engineering', credits: 4, grade: 'B+' },
        { code: 'MATH301', name: 'Discrete Math', credits: 3, grade: 'A' }
      ]
    };

    return {
      id: parseInt(id),
      ...base,
      phone: `+1 (555) ${String(id).padStart(3, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
      studentId: `STU202${5-Math.floor(id/4)}00${id}`,
      address: `${id * 123} University Ave, College Town, ST 12345`,
      enrollmentDate: yearToEnrollment[base.year],
      courses: courseSets[base.course] || courseSets['math']
    };
  };

  const student = getStudentData(parseInt(id));

  if (!student) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Student Not Found</h2>
        <p className="text-gray-600 mb-4">The student with ID {id} could not be found.</p>
        <Link
          to="/dashboard/students"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Students
        </Link>
      </div>
    );
  }

  const getCourseLabel = (course) => {
    const courseMap = {
      'math': 'Mathematics',
      'science': 'Science',
      'computer-science': 'Computer Science'
    };
    return courseMap[course] || course;
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-yellow-100 text-yellow-800';
    if (grade.startsWith('C')) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div>
        <Link
          to="/dashboard/students"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Students
        </Link>
      </div>

      {/* Student Profile Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32"></div>
        <div className="px-6 py-4 -mt-16 relative">
          <div className="flex items-end space-x-4">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div className="pb-2">
              <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
              <p className="text-gray-600">{getCourseLabel(student.course)} • {student.year}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Information */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
              <p className="text-gray-900">{student.studentId}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-gray-900">{student.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <p className="text-gray-900">{student.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
              <p className="text-gray-900">{getCourseLabel(student.course)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
              <p className="text-gray-900">{student.year}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Date</label>
              <p className="text-gray-900">{student.enrollmentDate}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <p className="text-gray-900">{student.address}</p>
            </div>
          </div>
        </div>

        {/* Academic Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Academic Summary</h2>
          <div className="space-y-4">
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-600">Current GPA</p>
              <p className="text-3xl font-bold text-indigo-600">{student.gpa}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Credits</span>
                <span className="text-sm font-medium">
                  {student.courses.reduce((sum, course) => sum + course.credits, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Courses Enrolled</span>
                <span className="text-sm font-medium">{student.courses.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Academic Standing</span>
                <span className="text-sm font-medium text-green-600">Good Standing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Courses */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Current Courses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {student.courses.map((course, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {course.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.credits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(course.grade)}`}>
                      {course.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPage;
