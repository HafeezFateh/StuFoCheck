import { useEffect, useState } from "react";
import axios from "axios";
import StudentLayout from "../../layouts/StudentLayout";
import UpdatesCard from "../../components/UpdatesCard";

function StudentUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/updates");
        setUpdates(res.data);
      } catch (err) {
        console.error("Error fetching updates:", err);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <StudentLayout>
      <div className="flex flex-col gap-4 min-h-screen px-5 py-10 lg:px-40">
        <h2 className="text-2xl font-semibold text-slate-100 mb-2">📢 All Updates</h2>

        {updates.length === 0 ? (
          <p className="text-gray-500">No updates found.</p>
        ) : (
          updates.map((update) => (
            <UpdatesCard
              key={update.id}
              title={update.title}
              content={update.content}
              postedAt={update.posted_on}
            />
          ))
        )}
      </div>
    </StudentLayout>
  );
}

export default StudentUpdates;
