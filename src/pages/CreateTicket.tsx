import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { RxAvatar } from 'react-icons/rx'
import Button from '../components/Button'
import Input from '../components/Input'
import axios from 'axios'
import { Ticket, columns } from './ViewAllTicket'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

const USERID = ["A12300560079","ABC"]

export default function CreateTicket() {
  const [data, setData] = useState<Ticket[]>([])
  const [form, setForm] = useState({
    user_message: "",
    account_number: USERID[0],
    heading: ""
  })
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  const [isLoading, setIsLoading] = useState(false);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(import.meta.env.VITE_API_URL + '/create_ticket', {...form})
      window.location.reload()
    } catch (error) {
      console.error(error)
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Ticket[]>(import.meta.env.VITE_API_URL + `/get_tickets_by_account_number?account_number=${form.account_number}`)
        setData(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false);
      }
    })()
  },[])

  return (
    <div className='bg-[#f7f7f7] flex h-screen w-screen'>
      <Sidebar />
      <div className='w-full'>
        <div className='w-full bg-white border-b border-[#E1E4EB] flex flex-row-reverse p-3'>
          <p>Admin Name</p>
          <RxAvatar className='text-2xl mr-2' />
        </div>
        <div className='w-full h-full px-2 py-4'>
          <form className='rounded-md bg-white border border-[#E1E4EB]' onSubmit={handleSubmit}>
            <div className='bg-[#F6E5FF] w-full p-3 flex justify-between items-center'>
              <p className='font-bold text-lg'>Raise Ticket</p>
              <div><Button disabled={isLoading} type='submit' className='px-3 py-1'>Create Ticket</Button></div>
            </div>
            <div className='flex flex-col space-y-3 p-3'>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                  <label htmlFor="account_number" className='text-gray-500 mb-2'>Account Number</label>
                  <select required id="account_number" name="account_number" defaultValue={USERID[0]} onChange={(e) => setForm((prev) => ({...prev,[e.target.name]: e.target.value}))}>
                    {USERID.map((userId,index) => (<option key={index} value={userId} >{userId}</option>))}
                  </select>
                </div>
                <Input labelName='Heading' type="text" placeholder='Type Description Here' isRequired name='heading' handleChnage={handleInputChange} />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="user_message" className='mb-2'>Description</label>
                <textarea required name="" id="" placeholder='Enter your query' className='border border-[#E1E4EB] rounded-md min-h-48 p-2'></textarea>
              </div>
            </div>
          </form>
          <div className='rounded-md bg-white border border-[#E1E4EB] mt-3 p-3'>
            <div className='w-full overflow-hidden border border-[#E1E4EB] rounded-xl'>
                  <table className='w-full'>
                    <thead>
                      {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map(header => (
                            <th className='p-3 text-left text-[#7B8694] border-r border-[#E1E4EB]' key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header,header.getContext())}</th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody>
                      {table.getRowModel().rows.map(row => {
                        return (<tr key={row.id} className='border-t bg-white border-[#E1E4EB] cursor-pointer'  
                        // onClick={() => navigate(`/ticket/${userId}/${row.getVisibleCells().filter(e => e.id.includes('ticket_id'))[0].getValue()}`)} 
                        >
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id} className='p-3 border-r border-[#E1E4EB] text-[#151B23]'>
                            {flexRender(cell.column.columnDef.cell,cell.getContext())}
                          </td>
                        ))}
                      </tr>)
                      })}
                    </tbody>
                  </table>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}
