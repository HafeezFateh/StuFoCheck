
import StuFacCard from "../../components/StuFacCard";
import StudentLayout from "../../layouts/StudentLayout";

function StudentFaculties(){
    return(
        <>
            <StudentLayout>
                <h1 className="mx-5 p-4 text-xl text-slate-800 font-semibold ">Faculties</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-4 mx-10">
                    <StuFacCard
                    name="Hafeez"
                    dept="CSE"
                    designation="Associate Professor"
                    />
                    <StuFacCard
                    name="Hafeez"
                    dept="CSE"
                    designation="Associate Professor"
                    />
                    <StuFacCard
                    name="Hafeez"
                    dept="CSE"
                    designation="Associate Professor"
                    />
             
            </div>
            </StudentLayout>
        </>
    )
}

export default StudentFaculties;