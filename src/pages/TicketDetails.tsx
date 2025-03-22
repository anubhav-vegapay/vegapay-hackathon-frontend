import { TicketHeader } from "../components/TicketHeader";
import AccountSummary from "../components/AccountSummary";
import { TransactionsTable } from "../components/TransactionsTable";
import { ChargesTable } from "../components/ChargesTable";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

export const TicketDetails = () => {

  const { userId, ticketId } = useParams();

  if(!userId || !ticketId){
    return window.location.href = '/'
  }

  return (
    <div className="bg-[#f7f7f7] flex h-screen w-screen">
      <Sidebar />
      <main className="w-full flex flex-col gap-2">
      <TicketHeader ticketId={ticketId} />
      <AccountSummary userId={userId} />
      <TransactionsTable userId={userId} />
      <ChargesTable userId={userId} />
    </main>
    </div>
  );
};
