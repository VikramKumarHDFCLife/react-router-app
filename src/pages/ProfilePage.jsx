import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  const profileInfo = {
    username: user?.username || 'Student',
    email: 'student@university.edu',
    studentId: 'STU2024001',
    department: 'Computer Science',
    year: 'Junior',
    gpa: '3.75',
    phone: '+1 (555) 123-4567',
    address: '123 University Ave, College Town, ST 12345',
    enrollmentDate: 'September 2022'
  };

  const courses = [
    { code: 'CS301', name: 'Data Structures & Algorithms', credits: 3, grade: 'A' },
    { code: 'CS350', name: 'Database Systems', credits: 3, grade: 'A-' },
    { code: 'CS400', name: 'Software Engineering', credits: 4, grade: 'B+' },
    { code: 'MATH301', name: 'Discrete Mathematics', credits: 3, grade: 'A' },
    { code: 'CS320', name: 'Operating Systems', credits: 3, grade: 'B+' },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Header */}
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
              <h1 className="text-2xl font-bold text-gray-900">{profileInfo.username}</h1>
              <p className="text-gray-600">{profileInfo.department} • {profileInfo.year}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
              <p className="text-gray-900">{profileInfo.studentId}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-gray-900">{profileInfo.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <p className="text-gray-900">{profileInfo.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <p className="text-gray-900">{profileInfo.department}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
              <p className="text-gray-900">{profileInfo.year}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Date</label>
              <p className="text-gray-900">{profileInfo.enrollmentDate}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <p className="text-gray-900">{profileInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Academic Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Academic Summary</h2>
          <div className="space-y-4">
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-600">Current GPA</p>
              <p className="text-3xl font-bold text-indigo-600">{profileInfo.gpa}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Credits</span>
                <span className="text-sm font-medium">78</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed Courses</span>
                <span className="text-sm font-medium">26</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current Courses</span>
                <span className="text-sm font-medium">5</span>
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
              {courses.map((course, index) => (
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
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
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

export default ProfilePage;
