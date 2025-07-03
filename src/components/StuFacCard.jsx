import FacultyPic from "/src/components/FacultyPic";

function StuFacCard(props){
    return(
            <div className="bg-slate-100/30 flex flex-col gap-1 text-slate-800 items-center  border border-slate-200 p-4  rounded-lg">
                <FacultyPic image=""/>
                <h1 className="text-lg text-slate-50 font-semibold">{props.name}</h1>   
                <p className="text-slate-100">{props.designation}</p>
                <p className="text-slate-100">{props.dept}</p>
            </div>
    )
}

export default StuFacCard;