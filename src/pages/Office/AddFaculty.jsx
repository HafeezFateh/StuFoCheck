import OfficeLayout from '../../layouts/OfficeLayout';

function AddFaculty() {
  const fields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'facultyId', label: 'Faculty ID', type: 'text' },
    { id: 'department', label: 'Department', type: 'text' },
    { id: 'dob', label: 'DOB', type: 'date' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'address', label: 'Address', type: 'text' },
  ];

  return (
    <OfficeLayout>
      <form className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-white shadow-md mt-2">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Add Faculty</h2>

        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="text-lg font-semibold text-slate-800">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="w-full border border-slate-300 rounded-lg p-2 font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
        ))}

        <div className="flex justify-end">
          <input
            type="submit"
            value="Add Faculty"
            className="border border-slate-500 shadow-lg rounded-lg px-7 py-2 bg-slate-200 hover:bg-slate-300 cursor-pointer mt-4"
          />
        </div>
      </form>
    </OfficeLayout>
  );
}

export default AddFaculty;
