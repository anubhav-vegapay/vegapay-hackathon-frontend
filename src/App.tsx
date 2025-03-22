import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import ViewAllTicket from './pages/ViewAllTicket'
// import Ticket from './pages/Ticket'
import { TicketDetails } from './pages/TicketDetails'
import CreateTicket from './pages/CreateTicket'

export default function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/:userId' element={<ViewAllTicket />} />
      <Route path='/ticket/:userId/:ticketId' element={<TicketDetails />} />
      <Route path='/create' element={<CreateTicket />} />
    </Routes>
  )
}
