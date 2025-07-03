import { useEffect, useState } from "react";
import axios from "axios";
import StudentPic from "../../components/StudentPic";

function StudentProfile() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found.");
          setLoading(false);
          return;
        }

        // Decode JWT safely
        const decodedPayload = JSON.parse(atob(token.split(".")[1]));
        const rollNo = decodedPayload.roll_no;

        if (!rollNo) {
          console.error("roll_no missing in token.");
          setLoading(false);
          return;
        }

        const res = await axios.get(`http://localhost:5000/api/students/${rollNo}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStudent(res.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, []);

  if (loading) return <p>Loading student info...</p>;
  if (!student) return <p>Student not found.</p>;

 
   return (
  <div className=" mt-7 mx-5 flex flex-col lg:flex-row gap-4 min-h-[500px]">
    <div className="p-10 lg:w-1/3 flex flex-col gap-2 items-center bg-slate-100/20 border border-slate-200 rounded-lg">
      <StudentPic image="" className="mt-10" />
      <h1 className="mt-3 text-lg text-white font-semibold">Name: {student.name}</h1>
      <p className="text-lg text-slate-300 font-semibold">Roll No: {student.roll_no}</p>
      <p className="text-lg text-slate-200">Department: {student.department}</p>
    </div>

    <div className="p-10 lg:w-2/3 lg:text-xl flex flex-col gap-2 justify-center bg-slate-100/20 border border-slate-200 rounded-lg">
      <table>
        <tbody>
          <tr>
            <td className="text-slate-100 font-medium p-1">DOB</td>
            <td className="text-slate-100 font-medium p-1">
              <span className="mr-4">:</span> {student.dob}
            </td>
          </tr>
          <tr>
            <td className="text-slate-100 font-medium p-1">Email</td>
            <td className="text-slate-100 font-medium p-1">
              <span className="mr-4">:</span> {student.email}
            </td>
          </tr>
          <tr>
            <td className="text-slate-100 font-medium p-1">Address</td>
            <td className="text-slate-100 font-medium p-1">
              <span className="mr-4">:</span> {student.address}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

 
}

export default StudentProfile;
