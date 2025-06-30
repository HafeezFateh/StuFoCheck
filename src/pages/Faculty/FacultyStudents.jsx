
import FacStuCard from "../../components/FacStuCard";
import FacultyLayout from "../../layouts/FacultyLayout";

function FacultyStudents(){
    return(
        <>
            <FacultyLayout>
                <h1 className="mx-5 p-4 text-xl text-slate-800 font-semibold ">Students</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-4 mx-10">
                 <FacStuCard
                    name="Hafeez"
                    roll_no="20617"
                    dept="CSE"
                />
                <FacStuCard
                    name="Hafeez"
                    roll_no="20617"
                    dept="CSE"
                />
                <FacStuCard
                    name="Hafeez"
                    roll_no="20617"
                    dept="CSE"
                />
                <FacStuCard
                    name="Hafeez"
                    roll_no="20617"
                    dept="CSE"
                />
             
            </div>
            </FacultyLayout>
        </>
    )
}

export default FacultyStudents;