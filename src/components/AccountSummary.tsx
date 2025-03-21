// export const AccountSummary = () => {
//   return (
//     <section className="flex overflow-hidden flex-col justify-center p-6 mt-2 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5">
//       <div className="w-full">
//         <header className="flex flex-wrap gap-10 justify-between items-center w-full">
//           <h2 className="text-lg font-semibold leading-tight text-gray-900">
//             Account Summary
//           </h2>
//           <div className="flex gap-3.5 items-center self-stretch font-medium min-w-60">
//             <div className="flex gap-2 justify-center items-center bg-white min-h-5 rounded-[99px]">
//               <span className="text-xs leading-tight text-neutral-300">
//                 Dormant since:
//               </span>
//               <span className="text-xs tracking-normal text-gray-900">
//                 1 days
//               </span>
//             </div>
//             <div className="shrink-0 w-0 bg-gray-200 border border-gray-200 border-solid h-[18px]" />
//             <div className="flex gap-2 justify-center items-center bg-white min-h-5 rounded-[99px]">
//               <span className="text-xs leading-tight text-neutral-300">
//                 Active block code
//               </span>
//               <span className="flex gap-1 items-center w-4 text-xs tracking-normal text-violet-900">
//                 <span className="px-1 w-4 bg-purple-100 rounded-[99px]">A</span>
//               </span>
//             </div>
//           </div>
//         </header>

//         <div className="mt-6">
//           <div className="flex gap-4 items-start px-5 py-4 text-sm leading-tight rounded-lg bg-neutral-100 font-[450]">
//             <div className="flex flex-wrap flex-1 shrink gap-5 items-center basis-0 min-w-60">
//               <LimitSection
//                 sanctioned="₹5,00,000"
//                 available="₹1,00,000"
//                 used="₹1,05,000"
//                 showArrow
//               />
//               <div className="shrink-0 self-stretch w-0 h-9 border border-dashed bg-neutral-300 border-neutral-300" />
//               <LimitSection
//                 sanctioned="₹50,000"
//                 available="₹50,000"
//                 used="₹30,000"
//                 showArrow
//                 isCash
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// interface LimitSectionProps {
//   sanctioned: string;
//   available: string;
//   used: string;
//   showArrow?: boolean;
//   isCash?: boolean;
// }

// const LimitSection: React.FC<LimitSectionProps> = ({
//   sanctioned,
//   available,
//   used,
//   showArrow,
//   isCash,
// }) => (
//   <div className="flex flex-wrap gap-2.5 items-center self-stretch my-auto min-w-60">
//     <div className="self-stretch my-auto w-40">
//       <p className="text-slate-500">
//         {isCash ? "Sanctioned cash limit" : "Sanctioned limit"}
//       </p>
//       <p className="mt-1 text-gray-900">{sanctioned}</p>
//     </div>
//     <div className="self-stretch my-auto w-40">
//       <p className="text-slate-500">
//         {isCash ? "Available cash limit" : "Available limit"}
//       </p>
//       <p className="mt-1 text-gray-900">{available}</p>
//     </div>
//     <div className="self-stretch my-auto w-40">
//       <p className="text-slate-500">
//         {isCash ? "Used cash limit" : "Used limit"}
//       </p>
//       <div className="flex gap-1.5 items-center mt-1 text-gray-900">
//         <span>{used}</span>
//         {showArrow && (
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/09777a9f56d48fc6b17d4ec78fef3aa7209aaace?placeholderIfAbsent=true&apiKey=49fcef25fa63406da67a3fa561ce9100"
//             className="w-3.5 aspect-square"
//             alt="Arrow indicator"
//           />
//         )}
//       </div>
//     </div>
//   </div>
// );







import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface AccountSummary {
  S_No: number;
  Account_Number: string;
  Last_4_Digits_of_Card: string;
  CIF: number;
  Customer_Name: string;
  Opened_Date: string; // Date in "YYYY-MM-DD" format
  Logo_Program_Identifier: number;
  Account_Status: string;
  Block_Code_1: string | null;
  Block_Code_2: string | null;
  Block_Code_1_dt: string | null;
  Block_Code_2_dt: string | null;
  Billing_Date: number;
  PCT_ID: number;
  PCT_Amount: number;
  Credit_Limit: number;
  Available_Limit: number;
  Outstanding: number;
  Cash_Limit: number;
  Available_Cash_Limit: number;
  Used_Cash_Limit: number;
  Delinquency_Age: number;
  Delinquency_Date: string; // Date in "YYYY-MM-DD" format
  TAD: number;
  Unbilled_Spends: number;
  Unbilled_Charges: number;
  Unbilled_GST: number;
  Repayments_Refunds: number;
  Last_Bill_Status: string;
  Last_Bill_Amount: number;
  Last_Repayment_Amount: number;
  Last_Bill_Date: string; // Date in "YYYY-MM-DD" format
  Payment_Due_Date: string; // Date in "YYYY-MM-DD" format
  Last_Repayment_Date: string; // Date in "YYYY-MM-DD" format
}


const AccountSummaryComponent = ({ userId } : { userId: string;}) => {
  const [accountSummary, setAccountSummary] = useState<AccountSummary | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<AccountSummary>(import.meta.env.VITE_API_URL + `/account-summary?account_number=${userId}`, { headers: {
          'X-Amz-Security-Token': `IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJGMEQCIAvt2ZDo7xcEhnyZ3qNe+DVvT4mEg5QirVWzs+HphBFFAiB7Dr0/KZaAynEMhjMeWDZdVrHfHzKt5JgpKttfRXLlsiqiAgig//////////8BEAIaDDgyOTUwNzUwMTQ1MyIM1B+0+ysYeIoXjCzJKvYBXMmm4nLqJkZXWt/W8DKF+YAdbkLO94XSfoy+0Sio53DPHKsVECjmWfGE5JaWkIfbeuCQJEetZ4HQPw3m1I+GVyDGe99q06DGQv8slY4QXP2zn5jlN3v+MWw43W+pJssfrflrob8KlrMAWwg1cVGecEvBaDE3hRxmoh7n6jSLHR6+R8R7KYnVDeDf57LWrfX2z3aiClDrH0prqqVQxrWstD9QL36IyX/0WhONL183CzVCuQw9y+Qo/pQlu/EJriPE+MSZcbjoZPYOOvV5cVxaVMS1vydTEuxmOQJt7Eh4nYyGwdf0RdIojG1gm7NAnuZqumkicTw8MO6h9L4GOp4BDkJkg2Qtx5bh6qWOq+SXTB1SY71r8Bovoc/gdAPTFH2eRs5JxR+Add6Tbogi0IdAUNo3j0DjwWekYeO21gF1qqf5r2oTwRm35veAFv4ys0EzHlFkl175Ot266D2R7wmyIFOX+5M00njvjUEheMnuLA0Mcob2WIeJteb+jehhfC+S30T3Dl9O9QB7FIgpL2YZqdIT6ZaUHA5pbdIf+w4=`,
          'X-Amz-Date': '20250321T163044Z',
          'Authorization': 'AWS4-HMAC-SHA256 Credential=ASIA4CIT77WGZ4CXNJBV/20250321/us-west-2/lambda/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=2e8dfe5ee84ddf24f9b9d226583572d660d2766af8c09ce87934cde1c6491e60'
        }})
        setAccountSummary(data);
      } catch (err) {
        console.error(err)
      }
    })()
  },[userId])

  return (
    <div className="bg-gray-100">
      <div className="mx-auto bg-white rounded-2xl shadow-md p-8 space-y-6">
        {/* Header */}
        <h2 className="text-2xl font-bold">Account Summary</h2>

        {/* Limits Summary */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Credit limit', value: `₹${accountSummary?.Credit_Limit}` },
            { label: 'Available limit', value: `₹${accountSummary?.Available_Limit}` },
            { label: 'Cash limit', value: `₹${accountSummary?.Cash_Limit}` },
            { label: 'Available limit', value: `₹${accountSummary?.Available_Limit}` },
            { label: 'Used cash limit', value: `₹${accountSummary?.Used_Cash_Limit}` },
            { label: 'Available cash limit', value: `₹${accountSummary?.Available_Cash_Limit}` },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
              <div className="text-sm text-gray-500">{item.label}</div>
              <div className="text-lg font-semibold">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Details Summary */}
        <div className="grid grid-cols-3 gap-6">
          {/* Balance Summary */}
          <div className="bg-gray-50 p-4 rounded-lg shadow space-y-2">
            <h3 className="font-semibold">Balance Summary</h3>
            {[
              ['Last_Repayment_Amount', `₹${accountSummary?.Last_Repayment_Amount}`],
              ['Last_Bill_Amount', `₹${accountSummary?.Last_Bill_Amount}`],
              ['Unbilled spends', '₹0'],
              ['Unbilled charges', '₹0'],
              ['Unbilled GST', '₹0'],
              ['Repayments/Refunds', '₹0']
            ].map(([label, value], index) => (
              <div key={index} className="flex justify-between">
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          {/* Statement Summary */}
          <div className="bg-gray-50 p-4 rounded-lg shadow space-y-2">
            <h3 className="font-semibold">Statement Summary</h3>
            {[
              ['Last bill status', 'PAID', true],
              ['Bill amount due', '₹20,000'],
              ['Last bill amount', '₹20,000'],
              ['Last bill date', '15/10/2024'],
              ['Payment due date', '02/11/2024'],
              ['Last repayment amount', '₹20,000'],
              ['Last repayment date', '18/10/2024']
            ].map(([label, value, isPaid], index) => (
              <div key={index} className="flex justify-between">
                <span>{label}</span>
                <span className={isPaid ? 'text-green-600 font-bold' : ''}>{value}</span>
              </div>
            ))}
          </div>

          {/* Reward & EMI Summary */}
          <div className="bg-gray-50 p-4 rounded-lg shadow space-y-2">
            <div>
              <h3 className="font-semibold">Reward Summary</h3>
              <div className="flex justify-between">
                <span>LTD redeemed</span>
                <span>1000</span>
              </div>
              <div className="flex justify-between">
                <span>Available balance</span>
                <span>500</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">EMI Preference</h3>
              <div className="flex justify-between">
                <span>Current EMI tenure</span>
                <span>3 months</span>
              </div>
              <div className="flex justify-between">
                <span>Last updated on</span>
                <span>12/12/23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummaryComponent;
