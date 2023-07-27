import Nav_1 from "@/components/Nav_1"
import Nav_2 from "@/components/Nav_2"
import Form_1 from "@/components/Form_1"
import Form_2 from "@/components/Form_2"
import Table from "@/components/Table"
import Side_nav from "@/components/Side_nav"
import Dashboard_cards from "@/components/Dashboard_cards"
const page = () => {
    return (
        <div className="md:h-screen md:flex md:flex-col bg-white text-black">
            <Nav_1 />
            <div className="dashboard_innercontainer mt-14 md:flex md:flex-row bg-white">
                <Side_nav />
                <div className="dashboard md:h-12 bg-white md:w-full">
                    <Nav_2/>
                    <Dashboard_cards/>
                    <Table/>
                    <Form_1/>
                    <Form_2/>
                    
                </div>
            </div>
        </div>
    )
}

export default page