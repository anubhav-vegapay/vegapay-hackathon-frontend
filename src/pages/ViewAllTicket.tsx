// @ts-ignore
import { useEffect, useState } from 'react'
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
import { useNavigate, useParams } from 'react-router-dom';

const DEPARTMENTS = ["OPERATIONS", "FRM", "RISK","PRODUCT"]

export default function ViewAllTicket() {
  const { userId } = useParams();

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
            {DEPARTMENTS.map((department,index) => (<Content key={`index-${index}`} value={`tab${index+1}`} className='w-full'><TabContent userId={userId} department={department} /></Content>))}
          </Root>
        </div>
      </div>
    </div>
  )
}

export type Ticket = {
  ticket_id: string;
  account_id: string;
  heading: string;
  user_message: string;
  response: {
      inputTextTokenCount: number;
      results: {
          tokenCount: number;
          outputText: string;
          completionReason: string;
      }[];
  };
  summary: string;
  department: string;
  conversation: {
    agent_response: string;
    user_message: string;
    timestamp: string;
  }[];  // Adjust type if conversation structure is known
  status: 'OPEN' | 'CLOSE' | 'PENDING';
  created_at: string;  // ISO date string
  sentiment: string;
}

export const columnHelper = createColumnHelper<Ticket>()

export const columns = [
  columnHelper.accessor(row => row.ticket_id, {
    id: 'ticket_id',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Ticket Id</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.account_id, {
    id: 'account_id',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Account Id</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.heading, {
    id: 'heading',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Heading</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.status, {
    id: 'status',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Status</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.created_at, {
    id: 'created_at',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Created At</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.sentiment, {
    id: 'sentiment',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Sentiment</span>,
    footer: info => info.column.id,
  }),
]

const TabContent = ({ department, userId } : { department: string; userId: string | undefined}) => {
  const [data, setData] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Ticket[]>(`${import.meta.env.VITE_API_URL}/get_tickets_by_department?department=${department}`)
        setData(data);
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false);
      }
    })()
  },[department])

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
          {table.getRowModel().rows.map(row => {
            return (<tr key={row.id} className='border-t bg-white border-[#E1E4EB] cursor-pointer'  onClick={() => navigate(`/ticket/${userId}/${row.getVisibleCells().filter(e => e.id.includes('ticket_id'))[0].getValue()}`)} >
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
  )
}