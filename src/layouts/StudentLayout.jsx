// src/layouts/StudentLayout.jsx
import StudentHeader from '../components/StudentHeader';
import Footer from '../components/Footer';

function StudentLayout({ children }) {
  return (
    <>
      <StudentHeader />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-2 py-6">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default StudentLayout;
