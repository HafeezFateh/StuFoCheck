import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OfficeLayout from '../../layouts/OfficeLayout';

function OfficePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/office/auth"); // redirect to login/register if not logged in
    }
  }, [navigate]);

  return (
    <OfficeLayout>
      <h1 className="mx-5 text-2xl font-semibold">Welcome to Office Panel</h1>
    </OfficeLayout>
  );
}

export default OfficePage;
