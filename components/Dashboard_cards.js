const Dashboard_cards = () => {
  return (
    <div className="dashboard_card md:flex md:flex-row justify-between md:w-full mt-2 bg-white">
        <div className="card_width md:m-3 md:p-4 md:w-full bg-slate-100 rounded-md flex flex-row"><i className="fa-solid fa-bag-shopping fa-2xl  md:mt-6 md:mr-5" style={{color: "red"}}></i><p>Total Sales <br/> $2,453</p></div>
        <div className="card_width md:m-3 md:p-4 md:w-full bg-slate-100 rounded-md flex flex-row"><i className="fa-solid fa-store fa-2xl md:mt-6 md:mr-5" style={{color: "purple"}}></i><p>Total Expenses<br/>$2,153</p></div>
        <div className="card_width md:m-3 md:p-4 md:w-full bg-slate-100 rounded-md flex flex-row"><i className="fa-solid fa-user fa-2xl  md:mt-6 md:mr-5" style={{color: "green"}}></i><p>Total Visitors<br/>$3,453</p></div>
        <div className="card_width md:m-3 md:p-4 md:w-full bg-slate-100 rounded-md flex flex-row"><i class="fa-solid fa-list fa-2xl md:mt-6 md:mr-5" style={{color: "blue"}}></i><p>Total Order<br/>$2,153</p></div>
    </div>
  )
}

export default Dashboard_cards