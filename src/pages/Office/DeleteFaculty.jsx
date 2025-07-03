import { useState } from 'react';
import axios from 'axios';
import OfficeLayout from '../../layouts/OfficeLayout';

function DeleteFaculty() {
  const [facultyId, setFacultyId] = useState('');

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this faculty?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/faculty/${facultyId}`);
      alert("✅ Faculty deleted successfully!");
      setFacultyId('');
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete faculty.");
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
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Delete Faculty</h2>

        <label htmlFor="facultyId" className="text-lg font-semibold text-slate-200">Faculty ID</label>
        <input
          id="facultyId"
          type="text"
          value={facultyId}
          onChange={(e) => setFacultyId(e.target.value)}
          placeholder="Enter Faculty ID"
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

export default DeleteFaculty;
