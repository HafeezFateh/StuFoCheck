// src/layouts/StudentLayout.jsx
import OfficeHeader from '../components/OfficeHeader';
import Footer from '../components/footer';

function OfficeLayout({ children }) {
  return (
    <>
      <OfficeHeader />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-2 py-6">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default OfficeLayout;
