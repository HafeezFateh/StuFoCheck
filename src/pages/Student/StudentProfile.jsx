import StudentPic from "../../components/StudentPic";
function StudentProfile(){

    return (
        <div className="mt-7 mx-5 flex flex-col lg:flex-row gap-4 min-h-[500px]"> 
            <div id="student-profile" className=" p-10 lg:w-1/3 flex flex-col gap-2 items-center  bg-slate-100 border border-slate-200 rounded-lg">
                <StudentPic image="" className="mt-10"/>
                <h1 className="mt-3 text-lg font-semibold">Name: Hafeezur Rahman</h1>
                <p className="text-lg text-slate-800 font-semibold">Roll No: 20617</p>
                <p className="text-lg text-slate-700">Department: CSE</p>
            </div>
            <div id="student-details" className="p-10  lg:w-2/3 lg:text-xl flex flex-col gap-2  justify-center lg:justify-start bg-slate-100 border border-slate-200 rounded-lg">
                <table>
                    <tr>
                        <td className=" text-slate-800 font-medium p-1">DOB </td>
                        <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>15/10/2002</td>
                    </tr>
                    <tr>
                        <td className=" text-slate-800 font-medium p-1">Age </td>
                        <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>22</td>
                    </tr>
                    <tr>
                        <td className=" text-slate-800 font-medium p-1">Mobile </td>
                        <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>+91 1234456666</td>
                    </tr>
                    <tr>
                        <td className=" text-slate-800 font-medium p-1">Address </td>
                        <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>1. Somewhere, nation st, earth </td>
                    </tr>
                    <tr>
                        <td className=" text-slate-800 font-medium p-1">Email </td>
                        <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>someone@gmail.com</td>
                    </tr>
                    <tr>
                        <td className=" text-slate-800 font-medium p-1">Blood group </td>
                        <td className=" text-slate-800 font-medium p-1"><span className="mr-4 text-slate-800">:</span>A +ve</td>
                    </tr>
                  
                    
                </table>
            </div>
        </div>
    );
}

export default StudentProfile;
