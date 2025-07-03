import { useEffect, useState } from "react";
import StudentLayout from "../../layouts/StudentLayout";
import StuFacCard from "../../components/StuFacCard";
import axios from "axios";

function StudentFaculties() {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/faculty");
        setFaculties(res.data);
      } catch (err) {
        console.error("Error fetching faculties:", err);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <>
      <StudentLayout>
        <h1 className="mx-5 p-4 text-xl text-slate-100 font-semibold">Faculties</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-4 mx-10">
          {faculties.length === 0 ? (
            <p className="text-gray-500">No faculty data available.</p>
          ) : (
            faculties.map((fac) => (
              <StuFacCard
                key={fac.id}
                name={fac.name}
                dept={fac.department}
                designation={fac.designation}
              />
            ))
          )}
        </div>
      </StudentLayout>
    </>
  );
}

export default StudentFaculties;
