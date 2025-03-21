import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import ViewAllTicket from './pages/ViewAllTicket'
import Ticket from './pages/Ticket'
import { TicketDetails } from './pages/TicketDetails'

export default function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<ViewAllTicket />} />
      <Route path='/ticket/:userId/:ticketId' element={<TicketDetails />} />
    </Routes>
  )
}
