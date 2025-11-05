# 🚀 Student Portal - React Router Assignment

A comprehensive Student Portal built with React Router that demonstrates all major routing concepts including protected routes, nested routes, dynamic routing, and search parameters.

## 📋 Features Implemented

### ✅ Main Routes
- **`/`** → Landing Page with welcome message and login button
- **`/login`** → Login page with username form and navigation to dashboard
- **`/dashboard`** → Protected dashboard (redirects to login if not authenticated)

### ✅ Protected Routes
- **ProtectedRoute Component** checks authentication status
- Redirects unauthenticated users to `/login` using `<Navigate>`
- Protects all dashboard routes

### ✅ Navigation with useNavigate
- **Login success** → programmatically navigates to `/dashboard`
- **Logout button** → navigates back to `/login`
- **Landing page login button** → navigates to `/login`

### ✅ Nested Routes inside Dashboard
- **`/dashboard`** → Dashboard home with stats and activities
- **`/dashboard/profile`** → User profile page with academic information
- **`/dashboard/students`** → Students list with course filtering
- **`/dashboard/students/:id`** → Individual student details

### ✅ Dynamic Routes with useParams
- **`/dashboard/students/:id`** uses `useParams` to display student details
- Dynamic student data based on ID parameter
- 404 handling for non-existent student IDs

### ✅ Search Params with useSearchParams
- **`/dashboard/students?course=math`** → Filter students by Mathematics
- **`/dashboard/students?course=science`** → Filter students by Science  
- **`/dashboard/students?course=computer-science`** → Filter students by Computer Science
- Dynamic filtering updates URL parameters automatically

## 🛠️ Technology Stack

- **React 19** with hooks
- **React Router 7** for routing
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Context API** for state management

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx
│   └── ProtectedRoute/
│       └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── Dashboard.jsx
│   ├── DashboardHome.jsx
│   ├── ProfilePage.jsx
│   ├── StudentsPage.jsx
│   └── StudentDetailPage.jsx
├── App.jsx
└── main.jsx
```

## 🚦 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## 🔐 Authentication Flow

1. Visit landing page (`/`)
2. Click "Login to Portal" 
3. Enter any username and click "Login"
4. Automatically redirected to dashboard
5. Use "Logout" button to return to login

## 🧭 Navigation Examples

### Course Filtering Examples:
- `/dashboard/students` - View all students
- `/dashboard/students?course=math` - Mathematics students only
- `/dashboard/students?course=science` - Science students only  
- `/dashboard/students?course=computer-science` - Computer Science students only

### Student Details Examples:
- `/dashboard/students/1` - Alice Johnson's profile
- `/dashboard/students/2` - Bob Smith's profile
- `/dashboard/students/15` - Last student profile

## 📚 Learning Outcomes Achieved

- ✅ **Routes & Route Setup** - Complete routing configuration
- ✅ **Programmatic Navigation** - `useNavigate` implementation  
- ✅ **Conditional Redirects** - `<Navigate>` for auth protection
- ✅ **Nested Routes** - Dashboard with `<Outlet>` pattern
- ✅ **Protected Routes** - Authentication-based access control
- ✅ **Dynamic Routing** - `useParams` for student details
- ✅ **Query String Handling** - `useSearchParams` for filtering

## 🎨 UI Features

- **Modern Design** with Tailwind CSS
- **Responsive Layout** works on all screen sizes
- **Loading States** with animated spinners
- **Interactive Elements** with hover effects
- **Form Validation** and error handling
- **Beautiful Gradients** and card layouts

## 📊 Sample Data

The application includes:
- **15 Sample Students** across 3 different courses
- **Detailed Student Profiles** with grades and course information
- **Academic Statistics** and GPA tracking
- **Course Enrollment Data** with credits and grades+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
