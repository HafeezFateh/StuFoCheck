import OfficeLayout from '../../layouts/OfficeLayout';

function DeleteStudent() {
  return (
    <OfficeLayout>
      {/* Search by Roll No */}
      <form className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-white shadow-md mt-2">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Delete Student</h2>

        <label htmlFor="rollNo" className="text-lg font-semibold text-slate-800">Roll No</label>
        <input
          id="rollNo"
          type="text"
          placeholder="Enter Roll No"
          className="w-full border border-slate-300 rounded-lg p-2 text-slate-700 hover:outline-0"
        />

        <div className="flex justify-end">
          <button type="button"  onClick={() => {
                const confirmDelete = window.confirm("Are you sure you want to delete this student?");
                if (confirmDelete) {
                  // Call your delete function or API here
                  alert("Student deleted successfully!"); // You can replace this with actual delete logic
                }}} className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </form>
    </OfficeLayout>
  );
}

export default DeleteStudent;