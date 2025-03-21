import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";

interface InputProps {
    labelName: string;
    type: "email" | "text" | "password" | "textarea";
    placeholder: string;
    isRequired: boolean;
    className?: string;
    name: string;
    handleChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ labelName, type, placeholder, isRequired, className, name, handleChnage }: InputProps) {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <p className={`text-gray-500 mb-2 ${className ? className : ''}`}>{labelName}</p>
            <div className='flex justify-center items-center border border-gray-400 rounded bg-white w-full'>
                <input className='w-full py-1 px-2' name={name} type={type != "password" ? type : toggle ? "text" : type} placeholder={placeholder} required={isRequired} onChange={handleChnage} />
                {type === "password" && <IoEyeOutline className='mr-3 text-xl cursor-pointer' onClick={() => setToggle(p => !p)} />}
            </div>
        </div>
    )
}
