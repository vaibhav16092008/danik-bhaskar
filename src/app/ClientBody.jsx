"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import RightSidebar from "@/components/RightSidebar"
import Sidebar from "@/components/Sidebar"

const ClientBody = ({ children }) => {
    return (
        <div className=" bg-gray-100">
            <Navbar />
            <div className="flex">
                <Sidebar />
                {children}
                <RightSidebar />
            </div>
            <Footer />
        </div>
    )
}

export default ClientBody
