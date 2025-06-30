import UpdatesCard from '../../components/UpdatesCard';
import FacultyLayout from '../../layouts/FacultyLayout';


function FacultyUpdates(){
    return (
        <>
        <FacultyLayout>
        <div className="flex flex-col gap-2 min-h-screen"> 
            <div className="mx-5 flex flex-col gap-3 flex-grow my-10 lg:mx-40">
                <UpdatesCard
                heading="StuFoTech is being built"
                passage="For the reason being it is said that the team is going to plan a huge dinner!"
                />
                 <UpdatesCard
                heading="StuFoTech is being built"
                passage="For the reason being it is said that the team is going to plan a huge dinner!"
                />
            </div>
        </div>
        </FacultyLayout>
        
       </>
    )
}

export default FacultyUpdates;