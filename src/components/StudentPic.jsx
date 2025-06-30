function StudentPic(props){
    return (
        <img src={props.image} alt="" className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full shadow-lg border border-slate-300" />
    );
}

export default StudentPic;
