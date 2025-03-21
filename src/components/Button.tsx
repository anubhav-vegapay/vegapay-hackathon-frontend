import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export default function Button({ children, type, className } : ButtonProps) {
  return (
    <button className={`bg-[#5A189A] w-full text-white py-2 rounded-md ${className ? className : ''}`} type={type} >{children}</button>
  )
}
