import { useEffect, useState } from "react";
import axios from "axios";

interface Charge {
  S_No: number;
  Account_Number: string;
  Fees_Type: number;
  Amount: number;
  GST: number;
  Total_Amount_Incl_GST: string;
  Txn_Id: string;
  Description: string; // Could be a date description or other text
  Transaction_Date: string; // Date in "YYYY-MM-DD" format
  Posting_Date: string; // Date in "YYYY-MM-DD" format
  Due_Date: string; // Date or status (e.g., "Paid")
  Payment_Status: string;
  Mode_of_Payment: number;
  Penalty_Charges: string;
}


export const ChargesTable = ({ userId }: { userId: string;}) => {
  const [charges, setCharges] = useState<Charge[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Charge[]>(import.meta.env.VITE_API_URL + `/charges?account_number=${userId}`, {
          headers: {
            'X-Amz-Security-Token': `IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJGMEQCIAvt2ZDo7xcEhnyZ3qNe+DVvT4mEg5QirVWzs+HphBFFAiB7Dr0/KZaAynEMhjMeWDZdVrHfHzKt5JgpKttfRXLlsiqiAgig//////////8BEAIaDDgyOTUwNzUwMTQ1MyIM1B+0+ysYeIoXjCzJKvYBXMmm4nLqJkZXWt/W8DKF+YAdbkLO94XSfoy+0Sio53DPHKsVECjmWfGE5JaWkIfbeuCQJEetZ4HQPw3m1I+GVyDGe99q06DGQv8slY4QXP2zn5jlN3v+MWw43W+pJssfrflrob8KlrMAWwg1cVGecEvBaDE3hRxmoh7n6jSLHR6+R8R7KYnVDeDf57LWrfX2z3aiClDrH0prqqVQxrWstD9QL36IyX/0WhONL183CzVCuQw9y+Qo/pQlu/EJriPE+MSZcbjoZPYOOvV5cVxaVMS1vydTEuxmOQJt7Eh4nYyGwdf0RdIojG1gm7NAnuZqumkicTw8MO6h9L4GOp4BDkJkg2Qtx5bh6qWOq+SXTB1SY71r8Bovoc/gdAPTFH2eRs5JxR+Add6Tbogi0IdAUNo3j0DjwWekYeO21gF1qqf5r2oTwRm35veAFv4ys0EzHlFkl175Ot266D2R7wmyIFOX+5M00njvjUEheMnuLA0Mcob2WIeJteb+jehhfC+S30T3Dl9O9QB7FIgpL2YZqdIT6ZaUHA5pbdIf+w4=`,
            'X-Amz-Date': '20250321T172424Z',
            'Authorization': 'AWS4-HMAC-SHA256 Credential=ASIA4CIT77WGZ4CXNJBV/20250321/us-west-2/lambda/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=40a0d3fccd291e9e693c5ca5b05bfb53e5c583a862760f60ca7cf7259e794514'
          }
        })
        setCharges(data)
      } catch (err) {
        console.error(err)
      }
    })()
  },[userId])

  return (
    <section className="flex flex-col justify-center p-6 mt-2 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5">
      <h2 className="text-lg font-semibold leading-tight text-gray-900">
        Charges
      </h2>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full border border-solid border-[color:var(--Quick-Access-Border-border-50,#E1E4EB)] rounded-lg">
            <thead className="bg-neutral-100">
              <tr>
                <TableHeader>Fees_Type</TableHeader>
                <TableHeader>
                Amount
                </TableHeader>
                <TableHeader>GST</TableHeader>
                <TableHeader>Total_Amount_Incl_GST</TableHeader>
                <TableHeader>Txn_Id</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Transaction_Date</TableHeader>
                <TableHeader>Posting_Date</TableHeader>
                <TableHeader>Due_Date</TableHeader>
                <TableHeader>
                Payment_Status
                </TableHeader>
                <TableHeader>
                Mode_of_Payment
                </TableHeader>
                <TableHeader>
                Penalty_Charges
                </TableHeader>
              </tr>
            </thead>
            <tbody>
              {charges.map((charge, index) => (
                <tr key={index}>
                  <TableCell>
                    <div className="text-sm leading-tight text-gray-900 font-[450]">
                      {charge.Fees_Type}
                    </div>
                  </TableCell>
                  <TableCell><div className="text-xs font-medium tracking-normal text-slate-500">
                      {charge.Amount}
                    </div></TableCell>
                  <TableCell>{charge.GST}</TableCell>
                  <TableCell>{charge.Total_Amount_Incl_GST}</TableCell>
                  <TableCell className="text-right">{charge.Txn_Id}</TableCell>
                  <TableCell className="text-right">{charge.Description}</TableCell>
                  <TableCell className="text-right">
                    {charge.Transaction_Date}
                  </TableCell>
                  <TableCell className="text-right">
                    {charge.Posting_Date}
                  </TableCell>
                  <TableCell>{charge.Due_Date}</TableCell>
                  <TableCell>
                    <div className="text-sm leading-tight text-gray-900 font-[450]">
                      {charge.Payment_Status}
                    </div>
                  </TableCell>
                  <TableCell>{charge.Mode_of_Payment}</TableCell>
                  <TableCell>{charge.Penalty_Charges}</TableCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="p-4 text-sm font-bold leading-4 text-left text-slate-500 border-b border-l border-solid border-[color:var(--Quick-Access-Border-border-50,#E1E4EB)]">
    {children}
  </th>
);

const TableCell: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <td
    className={`p-4 border-b border-l border-solid border-[color:var(--Quick-Access-Border-border-50,#E1E4EB)] min-h-12 ${className}`}
  >
    {children}
  </td>
);
