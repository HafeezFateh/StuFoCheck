import StudentPic from "./StudentPic";


function FacStuCard(props){
    return(
            <div className="bg-slate-100 flex flex-col gap-1 text-slate-800 items-center  border border-slate-200 p-4  rounded-lg">
                <StudentPic image=""/>
                <h1 className="text-lg font-semibold">{props.name}</h1>   
                <p>{props.roll_no}</p>
                <p>{props.dept}</p>
            </div>
    )
}

export default FacStuCard;