import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FacultyAuth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    faculty_id: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ for redirect

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
    setFormData({ name: "", faculty_id: "", password: "" });
    setMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? "http://localhost:5000/api/auth/faculty/register"
      : "http://localhost:5000/api/auth/faculty/login";

    try {
      const res = await axios.post(url, formData);
      setMessage(res.data.message || "Login successful");

      if (!isRegistering) {
        localStorage.setItem("token", res.data.token);
        navigate("/faculty"); // ✅ Redirect after login
      }
    } catch (err) {
      console.error("Error:", err.response?.data?.error || err.message);
      setMessage(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 justify-center items-center min-h-screen bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-50/30  shadow-md rounded-lg p-6 mx-5 lg:mx-[400px]  w-full  border border-slate-300"
      >
        <h2 className="text-2xl font-bold mb-4 text-slate-50 text-center">
          {isRegistering ? "Faculty Registration" : "Faculty Login"}
        </h2>

        {isRegistering && (
          <div className="mb-4">
            <label className="block text-slate-50 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded px-3 py-2"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-slate-50 font-semibold mb-1">
            Faculty ID
          </label>
          <input
            type="text"
            name="faculty_id"
            placeholder="Enter Faculty ID"
            value={formData.faculty_id}
            onChange={handleChange}
            required
            className="w-full border border-slate-50 rounded px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label className="block text-slate-50 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isRegistering ? "Register" : "Login"}
        </button>

        {message && (
          <p className="text-sm text-center mt-4 text-slate-600">{message}</p>
        )}

        <p
          onClick={toggleMode}
          className="mt-4 text-sm text-center text-black hover:underline cursor-pointer"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "New here? Register"}
        </p>
      </form>
    </div>
  );
}

export default FacultyAuth;
