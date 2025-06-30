
function AddUpdate(props){
    return (
        <>
        <form action="" className="mx-5 lg:mx-40  flex flex-col gap-3 border border-slate-400 p-4  rounded" >
            <label htmlFor="" className="text-lg font-semibold text-slate-800">Heading</label>
            <input type="text" className="px-2 py-1 border focus:outline-0 border-slate-300 rounded" />
            <label htmlFor="" className="text-lg font-semibold text-slate-800">Passage</label>
            <textarea type="text" className="px-2 focus:outline-0 py-1 border border-slate-300 rounded"></textarea>
            <div className="flex justify-end">
                <input type="submit" className=" bg-blue-500 text-white shadow-xl cursor-pointer rounded px-7 py-1 my-4" value="Add" />
            </div>
        </form>
        </>

    )
}

export default AddUpdate;