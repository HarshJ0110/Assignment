import Pagination from "./Pagination"
const Table = () => {
    
    return (
        <div className="m-4 mb-8 p-4 md:m-3 md:p-8 bg-slate-100 rounded-md text-black">
            <h1 className="text-lg font-medium">Products</h1>
            <p>List of products</p>
            <div className="mt-3 pl-3 p-1 text-red-700 bg-red-100 border border-red-700 rounded-md"><button><i class="fa-solid fa-circle-exclamation p-2"></i></button> Error in deleting</div>
            <div className="mt-7 w-full border-1 border-slate-300 rounded-md text-left">
                <table className="table-auto md:w-full ">
                    <thead className="bg-gray-300">
                        <th className="p-3 border border-white ">Product</th>
                        <th className="p-3 border border-white">Product Id</th>
                        <th className="p-3 border border-white">Category</th>
                        <th className="p-3 border border-white">Edit/Delete</th>
                    </thead>
                    <tbody >

                        <tr >
                            <td className="p-2 px-3 border border-slate-300">Polo T-shirt</td>
                            <td className="p-2 px-3 border border-slate-300">1</td>
                            <td className="p-2 px-3 border border-slate-300">Clothing</td>
                            <td className="p-2 px-3 border border-slate-300"><button className="bg-blue-600 text-white p-1 w-20 rounded-md"><i className="fa-solid fa-pen-to-square"></i> Edit</button> <button className="bg-orange-600 text-white p-1 w-20 rounded-md"><i className="fa-sharp fa-solid fa-trash"></i> Delete</button></td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="p-2 px-3 border border-slate-300">Talking Tom</td>
                            <td className="p-2 px-3 border border-slate-300">2</td>
                            <td className="p-2 px-3 border border-slate-300">Toy</td>
                            <td className="p-2 px-3 border border-slate-300"><button className="bg-blue-600 text-white p-1 w-20 rounded-md"><i className="fa-solid fa-pen-to-square"></i> Edit</button> <button className="bg-orange-600 text-white p-1 w-20 rounded-md"><i className="fa-sharp fa-solid fa-trash"></i> Delete</button></td>
                        </tr>
                        <tr>
                            <td className="p-2 px-3 border border-slate-300">Denim Jacket</td>
                            <td className="p-2 px-3 border border-slate-300">3</td>
                            <td className="p-2 px-3 border border-slate-300">Clothing</td>
                            <td className="p-2 px-3 border border-slate-300"><button className="bg-blue-600 text-white p-1 w-20 rounded-md"><i className="fa-solid fa-pen-to-square"></i> Edit</button> <button className="bg-orange-600 text-white p-1 w-20 rounded-md"><i className="fa-sharp fa-solid fa-trash"></i> Delete</button></td>

                        </tr>
                        <tr className="bg-gray-200">
                            <td className="p-2 px-3 border border-slate-300">MI Mobile Cover</td>
                            <td className="p-2 px-3 border border-slate-300">3</td>
                            <td className="p-2 px-3 border border-slate-300">Accessories</td>
                            <td className="p-2 px-3 border border-slate-300"><button className="bg-blue-600 text-white p-1 w-20 rounded-md"><i className="fa-solid fa-pen-to-square"></i> Edit</button> <button className="bg-orange-600 text-white p-1 w-20 rounded-md"><i className="fa-sharp fa-solid fa-trash"></i> Delete</button></td>
                        </tr>
                        <tr>
                            <td className="p-2 px-3 border border-slate-300">Potato Chips</td>
                            <td className="p-2 px-3 border border-slate-300">5</td>
                            <td className="p-2 px-3 border border-slate-300">Bakery</td>
                            <td className="p-2 px-3 border border-slate-300"><button className="bg-blue-600 text-white p-1 w-20 rounded-md"><i className="fa-solid fa-pen-to-square"></i> Edit</button> <button className="bg-orange-600 text-white p-1 w-20 rounded-md"><i className="fa-sharp fa-solid fa-trash"></i> Delete</button></td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default Table
