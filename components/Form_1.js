const Form_1 = () => {
    return (
        <div className="form1_container m-4 mb-8 p-4 md:m-3 md:p-8 bg-slate-100 rounded-md text-black">
            <h1 className="text-lg font-medium">Product Details</h1>
            <p>Fill product details</p>
            <div className="mt-7 md:w-full border-1 border-slate-300 rounded-md text-left">
                <button className="p-1 px-2 mr-4 border border-slate-500 rounded-sm hover:bg-yellow-300 hover:border-yellow-600 ">English</button>
                <button className="p-1 px-2 border border-slate-500 rounded-sm hover:bg-yellow-300 hover:border-yellow-600 ">Turkish</button>
            </div>
            <form className="mt-5 ">
                <label className='block mb-2 text-gray-500'>Product Name</label>
                <input type="text" placeholder='"t-shirt"' className='block mb-6 w-full p-2 pl-3 pr-3 border border-gray-400 rounded-md' />
                <div className="w-full flex flex-row justify-between">
                    <div className='w-10/12 p-2'>
                        <label className='block w-full mb-2  text-gray-500'>Product Category</label>
                        <select className='w-full p-2 pl-3 pr-3 mb-6 text-gray-500 border border-gray-400 rounded-md'>

                            <option>
                                Toy
                            </option>
                            <option>
                                Bakery
                            </option>
                            <option>
                                Clothing
                            </option>
                        </select>
                    </div>
                    <div className="w-10/12 p-2">
                        <label className='block w-full mb-2 text-gray-500'>Product Id</label>
                        <input type="text" placeholder='"345RETYRHU56UYT"' className='w-full p-2 pl-3 pr-3 mb-6 text-gray-500 border border-gray-400 rounded-md' />
                    </div>
                    <div className="w-10/12 p-2">
                        <label className='block w-full mb-2 text-gray-500'>Quantity</label>
                        <input type="text" placeholder='"10"' className='w-full p-2 pl-3 pr-3 mb-6 text-gray-500 border border-gray-400 rounded-md' />
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <div className="w-10/12">
                        <label className='block w-full mb-2 text-gray-500'>P-Id</label>
                        <input type="text" placeholder='OKJHTYRUY' className='w-full p-2 pl-3 pr-3 mb-6 text-gray-500 border border-gray-400 rounded-md' />
                    </div>
                    <div className="w-10/12 pl-4">
                        <label className='block w-full mb-2 text-gray-500'>S-Id</label>
                        <input type="text" placeholder='987654321' className='w-full p-2 pl-3 pr-3 mb-6 text-gray-500 border border-gray-400 rounded-md' />
                    </div>

                </div>
                <label className='block mb-2 text-gray-500'>Description</label>
                <textarea type="text" placeholder='Best quality product' className='block mb-3 md:mb-6 w-full p-2 pl-3 pr-3 border border-gray-400 rounded-md' />
            </form>
        </div>
    )
}

export default Form_1
