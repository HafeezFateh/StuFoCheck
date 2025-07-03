import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentAuth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({
    name: "",
    roll_no: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
    setForm({ name: "", roll_no: "", password: "" });
    setMessage("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? "http://localhost:5000/api/auth/student/register"
      : "http://localhost:5000/api/auth/student/login";

    try {
      const res = await axios.post(url, form);
      setMessage(res.data.message || "Login successful!");

      if (!isRegistering) {
        localStorage.setItem("token", res.data.token);
        navigate("/student"); // ✅ redirect on login
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md bg-slate-50/30 rounded-lg shadow-md p-6 border border-slate-300">
        <h2 className="text-2xl font-bold text-slate-50 mb-4 text-center">
          {isRegistering ? "Student Registration" : "Student Login"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
          {isRegistering && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border border-slate-300 rounded p-2 focus:outline-none"
              required
            />
          )}

          <input
            type="text"
            name="roll_no"
            placeholder="Roll Number"
            value={form.roll_no}
            onChange={handleChange}
            className="border border-slate-300 rounded p-2 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-slate-300 rounded p-2 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-slate-50">{message}</p>
        )}

        <button
          onClick={toggleMode}
          className="mt-4 text-sm text-black hover:underline mx-auto block"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
}

export default StudentAuth;
