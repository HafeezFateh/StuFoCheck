// import FacultyPic from "../../components/FacultyPic";
// function FacultyProfile(){

//     return (
//         <div className="mt-7 mx-5 flex flex-col lg:flex-row gap-4 min-h-[500px]"> 
//             <div id="student-profile" className=" p-10 lg:w-1/3 flex flex-col gap-2 items-center  bg-slate-100 border border-slate-200 rounded-lg">
//                 <FacultyPic image="" className="mt-10"/>
//                 <h1 className="mt-3 text-lg font-semibold">Name: Hafeezur Rahman</h1>
//                 <p className="text-lg text-slate-800 font-semibold">Faculty ID: 20617</p>
//                 <p className="text-lg text-slate-700">Department: CSE</p>
//             </div>
//             <div id="student-details" className="p-10  lg:w-2/3 lg:text-xl flex flex-col gap-2  justify-center lg:justify-start bg-slate-100 border border-slate-200 rounded-lg">
//                 <table>
//                     <tr>
//                         <td className=" text-slate-800 font-medium p-1">DOB </td>
//                         <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>15/10/2002</td>
//                     </tr>
//                     <tr>
//                         <td className=" text-slate-800 font-medium p-1">Age </td>
//                         <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>22</td>
//                     </tr>
//                     <tr>
//                         <td className=" text-slate-800 font-medium p-1">Mobile </td>
//                         <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>+91 1234456666</td>
//                     </tr>
//                     <tr>
//                         <td className=" text-slate-800 font-medium p-1">Address </td>
//                         <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>1. Somewhere, nation st, earth </td>
//                     </tr>
//                     <tr>
//                         <td className=" text-slate-800 font-medium p-1">Email </td>
//                         <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>someone@gmail.com</td>
//                     </tr>
//                     <tr>
//                         <td className=" text-slate-800 font-medium p-1">Blood group </td>
//                         <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>A +ve</td>
//                     </tr>
                  
                    
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default FacultyProfile;

import { useEffect, useState } from "react";
import FacultyPic from "../../components/FacultyPic";
import axios from "axios";

function FacultyProfile() {
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          setLoading(false);
          return;
        }

        // Decode the token to extract faculty_id
        const decoded = JSON.parse(atob(token.split(".")[1]));
        const facultyId = decoded.faculty_id;

        if (!facultyId) {
          console.error("faculty_id missing in token");
          setLoading(false);
          return;
        }

        // Make API call with token and dynamic facultyId
        const res = await axios.get(`http://localhost:5000/api/faculty/${facultyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFaculty(res.data);
      } catch (err) {
        console.error("Error fetching faculty:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  if (loading) return <p className="p-4 text-center text-gray-500">Loading faculty info...</p>;
  if (!faculty) return <p className="p-4 text-center text-red-500">Faculty not found.</p>;

  return (
    <div className="mt-7 mx-5 flex flex-col lg:flex-row gap-4 min-h-[500px]">
      <div className="p-10 lg:w-1/3 flex flex-col gap-2 items-center bg-slate-100/30 border border-slate-200 rounded-lg">
        <FacultyPic image="" className="mt-10" />
        <h1 className="mt-3 text-lg text-white font-semibold">Name: {faculty.name}</h1>
        <p className="text-lg text-slate-100 font-semibold">Faculty ID: {faculty.faculty_id}</p>
        <p className="text-lg text-slate-200">Department: {faculty.department}</p>
      </div>

      <div className="p-10 lg:w-2/3 lg:text-xl flex flex-col gap-2 justify-center bg-slate-100/30 border border-slate-200 rounded-lg">
        <table>
          <tbody>
            <tr><td className="font-medium p-1 text-slate-100">DOB</td><td className="p-1 text-slate-100">: {faculty.dob}</td></tr>

            <tr><td className="font-medium p-1 text-slate-100">Email</td><td className="p-1 text-slate-100">: {faculty.email}</td></tr>
            <tr><td className="font-medium p-1 text-slate-100">Address</td><td className="p-1 text-slate-100">: {faculty.address}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacultyProfile;
