// import UpdatesCard from '../../components/UpdatesCard';
// import FacultyLayout from '../../layouts/FacultyLayout';


// function FacultyUpdates(){
//     return (
//         <>
//         <FacultyLayout>
//         <div className="flex flex-col gap-2 min-h-screen"> 
//             <div className="mx-5 flex flex-col gap-3 flex-grow my-10 lg:mx-40">
//                 <UpdatesCard
//                 heading="StuFoTech is being built"
//                 passage="For the reason being it is said that the team is going to plan a huge dinner!"
//                 />
//                  <UpdatesCard
//                 heading="StuFoTech is being built"
//                 passage="For the reason being it is said that the team is going to plan a huge dinner!"
//                 />
//             </div>
//         </div>
//         </FacultyLayout>
        
//        </>
//     )
// }

// export default FacultyUpdates;


import { useEffect, useState } from "react";
import axios from "axios";
import FacultyLayout from "../../layouts/FacultyLayout";
import UpdatesCard from "../../components/UpdatesCard";

function FacultyUpdates() {
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
    <FacultyLayout>
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
    </FacultyLayout>
  );
}

export default FacultyUpdates;
