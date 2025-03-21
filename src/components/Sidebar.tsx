import React from 'react'
import sidebarLogoSvg from "../assets/sidebar-logo.svg"
import { FaRegChartBar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='bg-[#240046] pt-6 pb-3 px-3 flex flex-col items-center space-y-3 rounded-tr-2xl rounded-br-2xl'>
        <img src={sidebarLogoSvg} alt="sidebarLogoSvg" />
        <FaRegChartBar className='text-white text-xl cursor-pointer' />
        <FaRegUser className='text-white text-xl cursor-pointer' />
    </div>
  )
}
