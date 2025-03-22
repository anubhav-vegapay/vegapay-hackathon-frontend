import React, { useState } from 'react'
import loginImage from "../assets/Login.jpeg"
import logoSvg from "../assets/logo.svg"
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();


    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!(form.email && form.password)){
            alert("All fields are required");
            return
        }
        // login
        if(form.email === "rocket@vegapay.tech" && form.password === "rocket@123"){
            navigate(`/A12300560079`)
        }else{
            alert("Invalid Credentials")
        }
    }

  return (
    <div className='bg-[#fefafe] p-3 w-screen h-screen grid grid-cols-2'>
        <div className='relative'>
            <img src={loginImage} alt="loginImage" className='h-full w-full rounded-2xl' />
            <div className='absolute text-white bottom-5 left-5'>
                <h1 className='text-5xl'>Welcome to</h1>
                <h1 className='text-5xl mt-1'>Dashboard</h1>
                <p className='mt-5'>© TeamRocket Technology Pvt Ltd 2024</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='w-[300px] flex justify-center items-center flex-col'>
                <img src={logoSvg} alt='logoSvg' />
                <p className='font-semibold mt-8'>Access your rewards dashboard</p>
                <p className='font-semibold mb-8'>using your email and password.</p>
                <form className='w-full' onSubmit={handleFormSubmit} >
                    <Input labelName='Email address' type='email' placeholder='adminname@yourbank.in' isRequired name='email' handleChnage={handleInputChange} />
                    <Input className="mt-5" labelName='Password' type='password' placeholder='Enter your password' isRequired name='password' handleChnage={handleInputChange} />
                    <div className='flex flex-row-reverse mt-1 text-[#5A189A]'>
                        <p className='cursor-pointer'>Forgot Password?</p>
                    </div>
                    <Button className='mt-12 cursor-pointer' type='submit'>Login</Button>
                </form>
            </div>
        </div>
    </div>
  )
}
