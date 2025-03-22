import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}

export default function Button({ children, type, className, disabled } : ButtonProps) {
  return (
    <button className={`bg-[#5A189A] w-full text-white py-2 rounded-md ${!disabled && 'cursor-pointer'} ${disabled && 'opacity-60'} ${className ? className : ''}`} type={type} disabled={disabled} >{children}</button>
  )
}
