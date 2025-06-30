import OfficeLayout from '../../layouts/OfficeLayout';

function EditStudent() {
  return (
    <OfficeLayout>
      {/* Search by Roll No */}
      <form className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-white shadow-md mt-2">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Edit Student</h2>

        <label htmlFor="rollNo" className="text-lg font-semibold text-slate-800">Roll No</label>
        <input
          id="rollNo"
          type="text"
          placeholder="Enter roll number"
          className="w-full border border-slate-300 rounded-lg p-2 text-slate-700 hover:outline-0"
        />

        <div className="flex justify-end">
          <button type="button" className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </form>
    </OfficeLayout>
  );
}

export default EditStudent;