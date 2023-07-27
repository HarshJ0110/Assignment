const Nav_2 = () => {
    return (
        <div className="w-full md:flex md:flex-row md:justify-between bg-white text-black">
            <ul className="nav2_container flex">
                <li className="ml-2 p-2 font-bold text-lg"><button>Add new post</button></li>
                <li className="p-3"><button><i class="fa-solid fa-plus m-1"></i>Add content</button></li>
                <li className="p-3"><button><i className="fa-sharp fa-solid fa-gear p-1"></i>settings</button></li>
            </ul>
            <ul>
                <li className="mt-3 md:flex md:mt-2">
                    <form className="nav2">
                        <input type="text" placeholder="Search..." className="search_bar p-2 md:p-1 bg-slate-100" name="search" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass ml-3 mr-3"></i></button>
                    </form> 
                </li>
            </ul>
        </div>

    )
}

export default Nav_2