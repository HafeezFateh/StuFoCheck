import { useState } from 'react';
import axios from 'axios';
import OfficeLayout from '../../layouts/OfficeLayout';

function DeleteStudent() {
  const [rollNo, setRollNo] = useState('');

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/students/${rollNo}`);
      alert("✅ Student deleted successfully!");
      setRollNo('');
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete student.");
    }
  };

  return (
    <OfficeLayout>
      <form
        className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-slate-100/30 shadow-md mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleDelete();
        }}
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Delete Student</h2>

        <label htmlFor="rollNo" className="text-lg font-semibold text-slate-100">Roll No</label>
        <input
          id="rollNo"
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter Roll No"
          className="w-full border border-slate-300 rounded-lg p-2 text-slate-100 hover:outline-0"
          required
        />

        <div className="flex justify-end">
          <button type="submit" className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </form>
    </OfficeLayout>
  );
}

export default DeleteStudent;
