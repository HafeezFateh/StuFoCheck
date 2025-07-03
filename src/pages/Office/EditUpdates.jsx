import { useEffect, useState } from "react";
import axios from "axios";
import OfficeLayout from "../../layouts/OfficeLayout";

function EditUpdates() {
  const [updates, setUpdates] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchUpdates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/updates");
      setUpdates(res.data);
    } catch (err) {
      console.error("Error fetching updates:", err);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/updates/${editingId}`, form);
      } else {
        await axios.post("http://localhost:5000/api/updates", form);
      }
      setForm({ title: "", content: "" });
      setEditingId(null);
      fetchUpdates();
    } catch (err) {
      console.error("Error submitting update:", err);
    }
  };

  const handleEdit = (update) => {
    setForm({ title: update.title, content: update.content });
    setEditingId(update.id);
    window.scrollTo(0, 0); // scroll to top when editing
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this update?");
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:5000/api/updates/${id}`);
      fetchUpdates();
    } catch (err) {
      console.error("Error deleting update:", err);
    }
  };

  return (
    <OfficeLayout>
      {/* Add/Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-5 lg:mx-40 flex flex-col gap-3 border border-slate-400 p-4 mt-4 bg-slate-900/50 rounded"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">
          {editingId ? "Edit Update" : "Add Update"}
        </h2>
        <label className="text-lg font-semibold text-slate-200">Heading</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="px-2 py-1 border focus:outline-0 border-slate-300 rounded"
        />
        <label className="text-lg font-semibold text-slate-200">Passage</label>
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="px-2 focus:outline-0 py-1 border border-slate-300 rounded"
        ></textarea>
        <div className="flex justify-end">
          <input
            type="submit"
            value={editingId ? "Update" : "Add"}
            className="bg-blue-500 text-white shadow-xl cursor-pointer rounded px-7 py-1 my-4 hover:bg-blue-600"
          />
        </div>
      </form>

      {/* List Existing Updates */}
      <div className="mx-5 lg:mx-40 mt-8 mb-16">
        <h2 className="text-xl font-bold text-slate-100 mb-4">📢 Existing Updates</h2>
        {updates.length === 0 ? (
          <p className="text-gray-500">No updates available.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {updates.map((update) => (
              <div
                key={update.id}
                className="bg-slate-900/50 border border-slate-300 rounded-lg p-4 shadow flex flex-col"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {update.title}
                  </h3>
                  <div className="flex gap-3">
                    <button
                      className="text-blue-200 font-semibold hover:underline"
                      onClick={() => handleEdit(update)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 font-semibold hover:underline"
                      onClick={() => handleDelete(update.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-slate-100 mt-1">{update.content}</p>
                <p className="text-xs text-slate-300 mt-1">
                  {new Date(update.posted_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </OfficeLayout>
  );
}

export default EditUpdates;
