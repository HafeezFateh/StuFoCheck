import { useState } from 'react';
import axios from 'axios';
import OfficeLayout from '../../layouts/OfficeLayout';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    roll_no: '',
    department: '',
    dob: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/students', formData);
      alert('Student added successfully!');
      setFormData({ name: '', roll_no: '', department: '', dob: '', email: '', address: '' }); // reset form
    } catch (err) {
      console.error('Error adding student:', err);
      alert('Failed to add student');
    }
  };

  const fields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'roll_no', label: 'Roll No', type: 'text' },
    { id: 'department', label: 'Department', type: 'text' },
    { id: 'dob', label: 'DOB', type: 'date' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'address', label: 'Address', type: 'text' },
  ];

  return (
    <OfficeLayout>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border mx-5 p-6 rounded-lg border-slate-400 bg-slate-100/30 shadow-md mt-2">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Add Student</h2>

        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="text-lg font-semibold text-slate-100">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="w-full border border-slate-300 rounded-lg p-2 font-light text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
              required
            />
          </div>
        ))}

        <div className="flex justify-end">
          <input
            type="submit"
            value="Add Student"
            className="border border-slate-500 shadow-lg rounded-lg px-7 py-2 bg-slate-200/70 hover:bg-slate-300 cursor-pointer mt-4"
          />
        </div>
      </form>
    </OfficeLayout>
  );
}

export default AddStudent;
