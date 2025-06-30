
function UpdatesCard(props){
    return (
        
        <div className="flex flex-col gap-1 border border-slate-300 bg-slate-100 p-3 rounded-lg" >
            <h1 className="text-lg text-slate-800 font-semibold">{props.heading}</h1>
            <p className="text-sm text-slate-600 font-light">{props.passage}</p>
            <div className="flex justify-end mx-2 font-semibold">
                <a href="#" className="hover:text-slate-500">Read more</a>
            </div>
        </div>
      
        
    )
}

export default UpdatesCard;