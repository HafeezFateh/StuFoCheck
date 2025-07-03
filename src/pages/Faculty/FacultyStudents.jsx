
// import FacStuCard from "../../components/FacStuCard";
// import FacultyLayout from "../../layouts/FacultyLayout";

// function FacultyStudents(){
//     return(
//         <>
//             <FacultyLayout>
//                 <h1 className="mx-5 p-4 text-xl text-slate-800 font-semibold ">Students</h1>
//                 <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-4 mx-10">
//                  <FacStuCard
//                     name="Hafeez"
//                     roll_no="20617"
//                     dept="CSE"
//                 />
//                 <FacStuCard
//                     name="Hafeez"
//                     roll_no="20617"
//                     dept="CSE"
//                 />
//                 <FacStuCard
//                     name="Hafeez"
//                     roll_no="20617"
//                     dept="CSE"
//                 />
//                 <FacStuCard
//                     name="Hafeez"
//                     roll_no="20617"
//                     dept="CSE"
//                 />
             
//             </div>
//             </FacultyLayout>
//         </>
//     )
// }

// export default FacultyStudents;

import { useEffect, useState } from "react";
import FacultyLayout from "../../layouts/FacultyLayout";
import FacStuCard from "../../components/FacStuCard";
import axios from "axios";

function FacultyStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/students");
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <FacultyLayout>
      <h1 className="mx-5 p-4 text-xl text-slate-800 font-semibold">Students</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-4 mx-10">
        {students.length === 0 ? (
          <p className="text-gray-500">No student data available.</p>
        ) : (
          students.map((student) => (
            <FacStuCard
              key={student.roll_no}
              name={student.name}
              roll_no={student.roll_no}
              dept={student.department}
            />
          ))
        )}
      </div>
    </FacultyLayout>
  );
}

export default FacultyStudents;
