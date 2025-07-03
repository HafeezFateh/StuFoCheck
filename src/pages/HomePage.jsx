import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex  flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 min-h-screen">
      {/* Main Section */}
      <div className="flex flex-col gap-10 items-center justify-center flex-grow">
        <h1 className="text-4xl font-semibold text-white">StuFoTech</h1>
        <ul className="text-xl text-center flex flex-col gap-4 lg:flex-row">
          <li className="group">
            <Link
              to="/student/auth"
              className="block border border-slate-400 bg-slate-50/30 text-white hover:text-black px-15 py-1 rounded-lg group-hover:shadow-lg"
            >
              Student
            </Link>
          </li>
          <li className="group">
            <Link
              to="/faculty/auth"
              className="block border border-slate-400 bg-slate-50/30 text-white hover:text-black px-15 py-1 rounded-lg group-hover:shadow-lg"
            >
              Faculty
            </Link>
          </li>
          <li className="group">
            <Link
              to="/office"
              className="block border border-slate-400 bg-slate-50/30 text-white hover:text-black px-15 py-1 rounded-lg group-hover:shadow-lg"
            >
              Office
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-300 p-3 mx-10 text-center">
        <p className="text-slate-400 text-sm font-light">
          © 2025 StuFoTech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
