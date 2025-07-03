import StudentPic from "./StudentPic";


function FacStuCard(props){
    return(
            <div className="bg-slate-100/30 flex flex-col gap-1 text-slate-800 items-center  border border-slate-200 p-4  rounded-lg">
                <StudentPic image=""/>
                <h1 className="text-lg text-white font-semibold">{props.name}</h1>   
                <p className="text-slate-100">{props.roll_no}</p>
                <p className="text-slate-200">{props.dept}</p>
            </div>
    )
}

export default FacStuCard;