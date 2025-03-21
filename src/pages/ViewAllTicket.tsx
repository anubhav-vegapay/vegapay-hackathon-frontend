import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { RxAvatar } from "react-icons/rx";
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import axios from 'axios';

const DEPARTMENTS = ["Department 1", "Department 2", "Department 3"]

export default function ViewAllTicket() {
  return (
    <div className='bg-[#f7f7f7] flex h-screen w-screen'>
      <Sidebar />
      <div className='w-full'>
        <div className='w-full bg-white border-b border-[#E1E4EB] flex flex-row-reverse p-3'>
          <p>Admin Name</p>
          <RxAvatar className='text-2xl mr-2' />
        </div>
        <div className='w-full h-full px-2 py-4'>
          <p className='text-xl ml-5'>Tickets</p>
          <Root defaultValue='tab1' className='w-full' >
            <List className='flex space-x-4 ml-5'>
              {DEPARTMENTS.map((department, index) => (<Trigger className='data-[state=active]:border-b data-[state=active]:border-b-[#5A189A] data-[state=active]:text-[#1047DC] cursor-pointer' value={`tab${index + 1}`}>{department}</Trigger>))}
            </List>
            <div className='border-b mb-3 border-b-[#E1E4EB]' />
            {DEPARTMENTS.map((department,index) => (<Content key={`index-${index}`} value={`tab${index+1}`} className='w-full'><TabContent department={department} /></Content>))}
          </Root>
        </div>
      </div>
    </div>
  )
}

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: info => info.column.id,
  }),
]

const TabContent = ({ department } : { department: string}) => {
  const [data, setData] = useState<Person[]>(() =>  [...defaultData]);
  const [isLoading, setIsLoading] = useState(false);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get<Person[]>(`${import.meta.env.VITE_API_URL}/view-all-tickets?department_type=${department}`)
  //       setData(data);
  //     } catch (err) {
  //       console.error(err)
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })()
  // },[department])

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
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
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='border-t bg-white border-[#E1E4EB]'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='p-3 border-r border-[#E1E4EB] text-[#151B23]'>
                  {flexRender(cell.column.columnDef.cell,cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}