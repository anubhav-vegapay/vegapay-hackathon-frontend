import { useEffect, useState } from "react";
import { StatusBadge } from "./StatusBadge";
import axios from "axios";

interface Transaction {
  S_No: number;
  Account_Number: string;
  Logo: number;
  Txn_Amount: number;
  Txn_Id: string;
  Logic_Module: number;
  Txn_Date: string; // Date in "YYYY-MM-DD" format
  Description: string;
  MCC: number;
  Merchant_Country_Code: string;
}

export const TransactionsTable = ({ userId } : { userId: string }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Transaction[]>(import.meta.env.VITE_API_URL + `/transactions?account_number=${userId}`, {
          headers: {
            'X-Amz-Security-Token': `IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJGMEQCIAvt2ZDo7xcEhnyZ3qNe+DVvT4mEg5QirVWzs+HphBFFAiB7Dr0/KZaAynEMhjMeWDZdVrHfHzKt5JgpKttfRXLlsiqiAgig//////////8BEAIaDDgyOTUwNzUwMTQ1MyIM1B+0+ysYeIoXjCzJKvYBXMmm4nLqJkZXWt/W8DKF+YAdbkLO94XSfoy+0Sio53DPHKsVECjmWfGE5JaWkIfbeuCQJEetZ4HQPw3m1I+GVyDGe99q06DGQv8slY4QXP2zn5jlN3v+MWw43W+pJssfrflrob8KlrMAWwg1cVGecEvBaDE3hRxmoh7n6jSLHR6+R8R7KYnVDeDf57LWrfX2z3aiClDrH0prqqVQxrWstD9QL36IyX/0WhONL183CzVCuQw9y+Qo/pQlu/EJriPE+MSZcbjoZPYOOvV5cVxaVMS1vydTEuxmOQJt7Eh4nYyGwdf0RdIojG1gm7NAnuZqumkicTw8MO6h9L4GOp4BDkJkg2Qtx5bh6qWOq+SXTB1SY71r8Bovoc/gdAPTFH2eRs5JxR+Add6Tbogi0IdAUNo3j0DjwWekYeO21gF1qqf5r2oTwRm35veAFv4ys0EzHlFkl175Ot266D2R7wmyIFOX+5M00njvjUEheMnuLA0Mcob2WIeJteb+jehhfC+S30T3Dl9O9QB7FIgpL2YZqdIT6ZaUHA5pbdIf+w4=`,
            'X-Amz-Date': '20250321T171255Z',
            'Authorization': 'AWS4-HMAC-SHA256 Credential=ASIA4CIT77WGZ4CXNJBV/20250321/us-west-2/lambda/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=cda2cb6179bf98b66f7747ecbc1a6dd1e8f86f790198f1bf20937517a903658c'
          }
        })
        setTransactions(data)
      } catch (err) {
        console.error(err)
      }
    })()
  },[userId])

  return (
    <section className="flex flex-col justify-center p-6 mt-2 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5">
      <h2 className="text-lg font-semibold leading-tight text-gray-900">
        Transactions
      </h2>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full border border-solid border-[color:var(--Quick-Access-Border-border-50,#E1E4EB)] rounded-lg">
            <thead className="bg-neutral-100">
              <tr>
                <TableHeader>Txn_Id</TableHeader>
                <TableHeader>Txn_Amount</TableHeader>
                <TableHeader>Logic_Module</TableHeader>
                <TableHeader>Txn_Date</TableHeader>
                <TableHeader>
                MCC
                </TableHeader>
                <TableHeader>Merchant_Country_Code</TableHeader>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <TableCell>
                    <div className="text-sm leading-tight text-gray-900 font-[450]">
                      {transaction.Txn_Id}
                    </div>
                  </TableCell>
                  <TableCell>
                  <div className="text-xs font-medium tracking-normal text-slate-500">
                      {transaction.Txn_Amount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm leading-tight text-gray-900 font-[450]">
                      {transaction.Logic_Module}
                    </div>
                  </TableCell>
                  <TableCell>{transaction.Txn_Date}</TableCell>
                  <TableCell>{transaction.MCC}</TableCell>
                  <TableCell>{transaction.Merchant_Country_Code}</TableCell>
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
