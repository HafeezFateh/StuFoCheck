import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output.css';

// Home
import HomePage from './pages/HomePage';

// Student Pages
import StudentPage from './pages/Student/StudentPage';
import StudentFaculties from './pages/Student/StudentFaculties';
import StudentUpdates from './pages/Student/StudentUpdates';
import StudentFee from './pages/Student/StudentFee';

// Faculty Pages
import FacultyPage from './pages/Faculty/FacultyPage';
import FacultyStudents from './pages/Faculty/FacultyStudents';
import FacultyUpdates from './pages/Faculty/FacultyUpdates';
import FacultyTimeTable from './pages/Faculty/FacultyTimeTable';

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
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Student Section */}
        <Route path="/student" element={<StudentPage />} />
        <Route path="/student/faculties" element={<StudentFaculties />} />
        <Route path="/student/news" element={<StudentUpdates />} />
        <Route path="/student/fees" element={<StudentFee />} />

        {/* Faculty Section */}
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/students" element={<FacultyStudents />} />
        <Route path="/faculty/news" element={<FacultyUpdates />} />
        <Route path="/faculty/timetable" element={<FacultyTimeTable />} />

        {/* Office Section */}
        <Route path="/office" element={<OfficePage />} />
        <Route path="/office/addstudent" element={<AddStudent />} />
        <Route path="/office/addfaculty" element={<AddFaculty />} />
        <Route path="/office/editstudent" element={<EditStudent />} />
        <Route path="/office/editfaculty" element={<EditFaculty />} />
        <Route path="/office/deletestudent" element={<DeleteStudent />} />
        <Route path="/office/deletefaculty" element={<DeleteFaculty />} />
        <Route path="/office/editupdates" element={<EditUpdates />} />
        <Route path="/office/editfees" element={<EditFees />} />
      </Routes>
    </Router>
  );
}

export default App;
