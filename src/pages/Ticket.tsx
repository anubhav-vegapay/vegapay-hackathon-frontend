import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import { IoChevronDownOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import X03Svg from "../assets/x-03.svg"
import { RxAvatar } from 'react-icons/rx';
import { MdLocalPhone } from "react-icons/md";
import lineSvg from "../assets/line.svg"
import { CgMail } from "react-icons/cg";

const TicketNavbarButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <button className={`flex space-x-6 rounded-sm border border-[#E1E4EB] px-3 py-2 ${className ? className : ''}`}>
            {children}
        </button>
    )
}

export default function Ticket() {
    const { userId, ticketId } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if(!(userId && ticketId))return
    //     (async () => {
    //         try {
    //             setIsLoading(true); 
    //             // api calls           
    //         } catch (err) {
    //             console.error(err)
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     })()
    // },[userId, ticketId])

    return (
        <div className='bg-[#f7f7f7] flex h-screen w-screen'>
            <Sidebar />
            <div className='w-full'>
                <div className='w-full bg-white border-b border-[#E1E4EB] py-3 flex justify-between items-center'>
                    <div />
                    <div className='ml-28 flex justify-center space-x-1 text-xs text-[#354356]'>
                        <TicketNavbarButton>
                            <p>Email ID</p>
                            <IoChevronDownOutline />
                        </TicketNavbarButton>
                        <TicketNavbarButton className='space-x-8'>
                            <div className='flex items-center space-x-2'>
                                <CiSearch />
                                <p>kashika.goyal@gmail.com</p>
                            </div>
                            <img src={X03Svg} alt="X03Svg" />
                        </TicketNavbarButton>
                        <button className='rounded-sm opacity-50 bg-[#C2C7CD] px-4'>Search</button>
                    </div>
                    <div className='flex flex-row-reverse p-3'>
                        <p>Admin Name</p>
                        <RxAvatar className='text-2xl mr-2' />
                    </div>
                </div>
                <div className='bg-white rounded-lg border border-[#E1E4EB] mx-2 mt-2 px-3 py-1 flex justify-between items-center'>
                    <div className='flex items-center space-x-6'>
                        <div className='flex items-center space-x-2'>
                            <RxAvatar className='h-5 w-5' />
                            <p className='text-[#3A4A5F] font-bold text-xs'>Kashika Goyal</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <MdLocalPhone />
                            <p className='text-[#354356] text-xs'>9845 849 346</p>
                        </div>
                        <img src={lineSvg} alt='lineSvg' />
                        <div className='flex items-center space-x-2'>
                            <CgMail />
                            <p className='text-[#354356] text-xs'>kashika.gpoyal@gmail.com</p>
                        </div>
                        <img src={lineSvg} alt='lineSvg' />
                        <div className='flex items-center space-x-2'>
                            <div className='p-1 rounded border border-[#2B3645] text-[#2B3645] font-medium text-[8px]'>Cust. ID</div>
                            <p className='text-[#354356] text-xs '>982347848547748</p>
                        </div>
                        <img src={lineSvg} alt='lineSvg' />
                        <div className='flex items-center space-x-2'>
                            <div className='p-1 rounded border border-[#2B3645] text-[#2B3645] font-medium text-[8px]'>Acc. no.</div>
                            <p className='text-[#354356] text-xs '>7384927483920</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
