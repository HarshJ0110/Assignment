const Form_3 = () => {
    return (
        <div className="form3_container flex flex-row">
            <div className="m-4 p-4 w-full md:m-3 md:p-8 bg-slate-100 rounded-md text-black">
                <h1 className="text-lg font-medium">Form Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                <form className="mt-5">
                    <label className='block mb-2 text-gray-500'>Lable title</label>
                    <input type="text" placeholder='Placeholder content' className='block mb-6 w-full p-2 pl-3 pr-3 border border-gray-400 rounded-md' />
                    <div className="w-full">
                        <div>
                            <label className='block mb-2 text-gray-500'>Lable title</label>
                            <select className='block w-full p-2 mb-6 text-gray-500 border border-gray-400 rounded-md'>
                                <option>
                                    Chose
                                </option>
                                <option>
                                    Chose
                                </option>
                                <option>
                                    Chose
                                </option>
                            </select>
                        </div>
                    </div>

                    <label className='block mb-2 text-gray-500'>Lable title</label>
                    <textarea type="text" placeholder='Placeholder content' className='block mb-6 w-full p-2 pl-3 pr-3 border border-gray-400 rounded-md' />
                    <button className="w-full p-2 bg-blue-600 rounded-md text-white hover:bg-white hover:text-black hover:border border-black">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Form_3