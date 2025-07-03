import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output.css';

// Components
import ProtectedRoute from './components/ProtectedRoute';

// Home
import HomePage from './pages/HomePage';

// Student Pages
import StudentPage from './pages/Student/StudentPage';
import StudentFaculties from './pages/Student/StudentFaculties';
import StudentUpdates from './pages/Student/StudentUpdates';
import StudentFee from './pages/Student/StudentFee';
import StudentAuth from './pages/StudentAuth';

// Faculty Pages
import FacultyPage from './pages/Faculty/FacultyPage';
import FacultyStudents from './pages/Faculty/FacultyStudents';
import FacultyUpdates from './pages/Faculty/FacultyUpdates';
import FacultyTimeTable from './pages/Faculty/FacultyTimeTable';
import FacultyAuth from './pages/FacultyAuth';

// Office Pages
import OfficePage from './pages/Office/OfficePage';
import AddStudent from './pages/Office/AddStudent';
import AddFaculty from './pages/Office/AddFaculty';
import EditStudent from './pages/Office/EditStudent';
import EditFaculty from './pages/Office/EditFaculty';
import DeleteStudent from './pages/Office/DeleteStudent';
import DeleteFaculty from './pages/Office/DeleteFaculty';
import EditUpdates from './pages/Office/EditUpdates';
import EditFees from './pages/Office/EditFees';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/student/auth" element={<StudentAuth />} />
        <Route path="/faculty/auth" element={<FacultyAuth />} />

        {/* Protected Student Routes */}
        <Route
          path="/student"
          element={<ProtectedRoute><StudentPage /></ProtectedRoute>}
        />
        <Route
          path="/student/faculties"
          element={<ProtectedRoute><StudentFaculties /></ProtectedRoute>}
        />
        <Route
          path="/student/news"
          element={<ProtectedRoute><StudentUpdates /></ProtectedRoute>}
        />
        <Route
          path="/student/fees"
          element={<ProtectedRoute><StudentFee /></ProtectedRoute>}
        />

        {/* Protected Faculty Routes */}
        <Route
          path="/faculty"
          element={<ProtectedRoute><FacultyPage /></ProtectedRoute>}
        />
        <Route
          path="/faculty/students"
          element={<ProtectedRoute><FacultyStudents /></ProtectedRoute>}
        />
        <Route
          path="/faculty/news"
          element={<ProtectedRoute><FacultyUpdates /></ProtectedRoute>}
        />
        <Route
          path="/faculty/timetable"
          element={<ProtectedRoute><FacultyTimeTable /></ProtectedRoute>}
        />

        {/* Protected Office Routes */}
        <Route
          path="/office"
          element={<ProtectedRoute><OfficePage /></ProtectedRoute>}
        />
        <Route
          path="/office/addstudent"
          element={<ProtectedRoute><AddStudent /></ProtectedRoute>}
        />
        <Route
          path="/office/addfaculty"
          element={<ProtectedRoute><AddFaculty /></ProtectedRoute>}
        />
        <Route
          path="/office/editstudent"
          element={<ProtectedRoute><EditStudent /></ProtectedRoute>}
        />
        <Route
          path="/office/editfaculty"
          element={<ProtectedRoute><EditFaculty /></ProtectedRoute>}
        />
        <Route
          path="/office/deletestudent"
          element={<ProtectedRoute><DeleteStudent /></ProtectedRoute>}
        />
        <Route
          path="/office/deletefaculty"
          element={<ProtectedRoute><DeleteFaculty /></ProtectedRoute>}
        />
        <Route
          path="/office/editupdates"
          element={<ProtectedRoute><EditUpdates /></ProtectedRoute>}
        />
        <Route
          path="/office/editfees"
          element={<ProtectedRoute><EditFees /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
