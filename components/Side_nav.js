import Dropdown from "./Dropdown"
const Side_nav = () => {
    return (
        <div className="table_container fixed left-0 h-screen bg-zinc-800 w-1/6 text-white">
            <button className='m-2 mb-4 w-11/12 p-2 mt-5 bg-white text-black hover:bg-gray-400 rounded-md'>+ New Item</button>
            <hr className="bg-black" />
            <Dropdown opt={"Dashboard"} op1={"Commerce"} op2={"Analysist"}/>
            <hr className="bg-black" />
            <Dropdown opt={"Application"} op1={"Commerce"} op2={"Analysist"}/>
            <hr className="bg-black" />
            <Dropdown opt={"Settings"} op1={"Commerce"} op2={"Analysist"}/>
            <hr className="bg-black" />
   
        </div>
    )
}

export default Side_nav