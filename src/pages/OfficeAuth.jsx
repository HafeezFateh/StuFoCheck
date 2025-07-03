import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OfficeAuth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
    setForm({ username: "", password: "" });
    setMessage("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? "http://localhost:5000/api/auth/office/register"
      : "http://localhost:5000/api/auth/office/login";

    try {
      const res = await axios.post(url, form);
      setMessage(res.data.message || "Success");

      if (!isRegistering) {
        localStorage.setItem("token", res.data.token);
        navigate("/office");
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-slate-300">
        <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
          {isRegistering ? "Office Registration" : "Office Login"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
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
          <p className="mt-4 text-center text-sm text-slate-600">{message}</p>
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

export default OfficeAuth;
