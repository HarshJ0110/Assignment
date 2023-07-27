import Link from 'next/link'
const Card = () => {
  return (
    <div className=" md:h-screen md:mb-3 md:grid md:place-content-center md:bg-white">
    <Link href="/posts" style={{color: "red"}} >Dashboard</Link>
        <div className="card_container md:max-w-3xl md:max-h-xl md:mx-auto md:bg-white md:flex md:items-center md:rounded-3xl md:shadow-2xl">
            <div>
              <img 
              src="/mountain.png" 
              alt="login"
              className="image md:rounded-l-3xl"  
              />
            </div>
            <div className='login_container md:ml-5 w-screen md:w-80'>
              <form>
                <h1 className='text-3xl mt-0 mb-2'>Login</h1>
                <p className='mb-9 text-gray-500'>Lorem ipsum, or lipsum</p>
                <label className='block mb-2 text-gray-500'>E-mail</label>
                <input id="e-mail" type="text" placeholder='Placeholder content' className='block mb-6 w-full p-2 pl-3 pr-3 border border-gray-400 rounded-md'/>
                <label className='block mb-2 text-gray-500'>Password</label>
                <input id="password" type="text"  placeholder='Placeholder content' className='w-full p-2 pl-3 pr-3 mb-6 text-gray-500 border border-gray-400 rounded-md'/>
                <p className='text-right mb-5'><Link href="#">forgot password?</Link></p>
                <button className='w-full mb-3 p-2 mr-0 border border-blue-200 border-r-2 bg-blue-300 text-slate-700 hover:bg-white hover:border-gray-400 hover:text-black rounded-md'>Login</button>
                <hr className='md:mb-1 md:w-36 bg-slate-400 inline-block'/><span className=' text-center w-3 p-1 text-slate-400'>or</span><hr className='md:mb-1 md:w-36 bg-slate-400 inline-block'/>
                <button className='w-full p-2 mt-3 border border-gray-400 hover:bg-blue-300 hover:border-blue-300 hover:text-slate-700 rounded-md'>Register</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Card
