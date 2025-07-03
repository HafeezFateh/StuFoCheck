import { useState } from "react";
import axios from "axios";
import OfficeLayout from "../../layouts/OfficeLayout";

function EditStudent() {
  const [rollNo, setRollNo] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/students/${rollNo}`);
      setStudentData(res.data);
      setMessage("");
    } catch (err) {
      setStudentData(null);
      setMessage("Student not found.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${rollNo}`, studentData);
      setMessage("✅ Student updated successfully!");
    } catch (err) {
      setMessage("❌ Failed to update student.");
    }
  };

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  return (
    <OfficeLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-slate-100/30 shadow-md mt-2"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Edit Student</h2>
        <label htmlFor="rollNo" className="text-lg  font-semibold text-slate-200">
          Roll No
        </label>
        <input
          id="rollNo"
          type="text"
          placeholder="Enter roll number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="w-full border border-slate-300 rounded-lg p-2 text-slate-100"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-fit"
        >
          Search
        </button>
      </form>

      {studentData && (
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-slate-100/30 shadow-md mt-4"
        >
          <h3 className="text-xl font-bold text-slate-100 mb-2">Update Details</h3>

          {["name", "department", "dob", "email", "address"].map((field) => (
            <div key={field}>
              <label className="text-lg  font-semibold text-slate-100 capitalize">
                {field}
              </label>
              <input
                type={field === "dob" ? "date" : "text"}
                name={field}
                value={studentData[field]}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg p-2 my-2 text-slate-100"
              />
            </div>
          ))}

          <button
            type="submit"
            className="px-5 py-2 bg-green-500/70 text-white rounded-lg hover:bg-green-600 w-fit"
          >
             Update
          </button>

          {message && <p className="text-slate-600 mt-2">{message}</p>}
        </form>
      )}

      {!studentData && message && (
        <p className="text-red-600 font-medium text-center mt-4">{message}</p>
      )}
    </OfficeLayout>
  );
}

export default EditStudent;
