import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

function OfficeHeader() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setOpen(prev => !prev);

    return (
        <div>
            {/* Main header (same for all screen sizes) */}
            <div className="bg-slate-100/30 rounded-lg mx-5 mt-5 p-4 flex items-center justify-between">
                <Link to="/" className="cursor-pointer">
                    <h1 className="text-lg font-semibold text-white mx-3">StuFoTech</h1>
                </Link>

                {/* Hamburger icon for mobile only */}
                <span
                    onClick={toggleMenu}
                    className="mx-3 text-white cursor-pointer material-symbols-outlined lg:hidden"
                >
                  <span className="lg:hidden">menu</span>
                </span>
            </div>

            {/* Links section - mobile dropdown & lg visible separately */}
            {/* Mobile: dropdown under header */}
            {open && (
                <div className="bg-slate-100/30 mx-5 mt-2 p-4 rounded-lg flex flex-col gap-2 lg:hidden">
                    {renderLinks(location)}
                </div>
            )}

            {/* Desktop: always visible below with different bg */}
            <div className="hidden lg:flex  bg-slate-200/30 mx-5 p-3 mt-4 justify-center rounded-lg gap-4 flex-wrap">
                {renderLinks(location)}
            </div>
        </div>
    );
}

// Nav link renderer
function renderLinks(location) {
    const links = [
        { to: "/office/addstudent", label: "Add Student" },
        { to: "/office/addfaculty", label: "Add Faculty" },
        { to: "/office/editstudent", label: "Edit Student" },
        { to: "/office/editfaculty", label: "Edit Faculty" },
        { to: "/office/deletestudent", label: "Delete Student" },
        { to: "/office/deletefaculty", label: "Delete Faculty" },
        { to: "/office/editupdates", label: "Edit Updates" },
        { to: "/office/editfees", label: "Edit Fees" },
    ];

    return links.map(({ to, label }, index) => (
        <Link
            key={index}
            to={to}
            className={`${
                location.pathname === to ? 'bg-slate-300' : 'text-slate-800'
            } text-xl rounded-lg px-4 py-2  hover:bg-slate-300 transition-colors duration-300`}
        >
            {label}
        </Link>
    ));
}

export default OfficeHeader;
