const Pagination = () => {
    const items = ['1', '2', '3', '4', '5'];
    return (

        <div className="flex justify-center items-center mt-5">
            <button><i className="fa-solid fa-backward m-2 text-gray-600"></i></button>
            {items.map((item, index) => (
                <button key={index} className="m-1 p-1 px-3 border border-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-lg">{item}</button>
            ))}
            <button><i className="fa-solid fa-forward m-2 text-gray-600"></i></button>
        </div>
    )
}

export default Pagination