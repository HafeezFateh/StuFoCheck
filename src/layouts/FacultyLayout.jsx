// src/layouts/StudentLayout.jsx
import FacultyHeader from '../components/FacultyHeader';
import Footer from '../components/Footer';

function FacultyLayout({ children }) {
  return (
    <>
      <FacultyHeader />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-2 py-6">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default FacultyLayout;
