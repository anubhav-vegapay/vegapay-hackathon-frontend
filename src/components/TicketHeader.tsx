import { StatusBadge } from "./StatusBadge";

export const TicketHeader = () => {
  return (
    <section className="flex flex-col justify-center p-6 w-full bg-white rounded-xl border border-gray-200 border-solid max-md:px-5">
      <div className="w-full">
        <header className="flex flex-col justify-center w-full">
          <h1 className="text-lg font-semibold leading-tight text-gray-900">
            Ticket Details
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-700">
            SR number - SR12345
          </p>
        </header>

        <div className="p-4 mt-4 w-full rounded-lg bg-neutral-100">
          <div className="flex flex-wrap gap-4 items-start w-full">
            <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-60">
              <DataRow label="Creation Timestamp" value="15/12/23 12:30 PM" />
              <DataRow label="Parameter" value="Txn Issue" />
              <div className="flex gap-10 items-center self-start mt-4">
                <span className="self-stretch my-auto text-sm leading-tight font-[450] text-slate-500 w-[200px]">
                  Ticket Status
                </span>
                <StatusBadge status="Open" variant="success" />
              </div>
            </div>

            <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-60">
              <DataRow label="Issue Type" value="Failed Payment" />
              <div className="flex gap-10 items-center mt-4">
                <span className="self-stretch my-auto text-sm leading-tight font-[450] text-slate-500 w-[200px]">
                  Priority
                </span>
                <StatusBadge status="High" variant="error" />
              </div>
              <DataRow label="Expected TAT" value="24 hours" />
            </div>

            <div className="flex flex-col flex-1 shrink justify-center text-sm basis-0 font-[450] min-w-60">
              <div className="flex gap-10 items-start w-full">
                <span className="leading-tight text-slate-500 w-[200px]">
                  Subject
                </span>
                <p className="flex-1 shrink leading-4 text-gray-900 basis-0">
                  Transaction failed at checkout
                </p>
              </div>
            </div>
          </div>

          <hr className="pt-1 mt-4 w-full border border-dashed bg-neutral-300 border-neutral-300" />

          <div className="mt-4 w-full text-slate-700">
            <h2 className="text-sm font-medium">Description</h2>
            <p className="mt-2 text-xs leading-5 font-[450]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices eu mi at efficitur. In aliquet tristique nisi eu
              tincidunt. Ut pretium varius tellus, a facilisis felis interdum
              ac. Pellentesque dignissim sodales leo at scelerisque. In vel
              lorem vel mi viverra scelerisque condimentum sit amet magna.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-4 mt-4 w-full bg-purple-50 rounded-lg">
          <h2 className="text-base font-semibold text-slate-700">AI Summary</h2>
          <p className="mt-4 text-xs leading-5 font-[450] text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultrices eu mi at efficitur. In aliquet tristique nisi eu tincidunt.
            Ut pretium varius tellus, a facilisis felis interdum ac.
            Pellentesque dignissim sodales leo at scelerisque. In vel lorem vel
            mi viverra scelerisque condimentum sit amet magna.
          </p>
          <div className="flex gap-4 items-center self-start mt-4 text-sm font-semibold leading-none">
            <span className="text-slate-700">Valid request : </span>
            <span className="text-green-600">YES</span>
          </div>

          <hr className="mt-4 border border-dashed bg-neutral-300 border-neutral-300" />

          <h2 className="mt-4 text-base font-semibold text-slate-700">
            Soft Response
          </h2>
          <p className="mt-4 text-xs leading-5 font-[450] text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultrices eu mi at efficitur. In aliquet tristique nisi eu tincidunt.
            Ut pretium varius tellus, a facilisis felis interdum ac.
            Pellentesque dignissim sodales leo at scelerisque. In vel lorem vel
            mi viverra scelerisque condimentum sit amet magna.
          </p>

          <div className="relative mt-4 w-full">
            <textarea
              className="px-3 pt-2 pb-28 w-full text-xs leading-tight bg-white rounded border border-solid border-[color:var(--Quick-Access-Border-border-50,#E1E4EB)] min-h-[129px] text-slate-500"
              placeholder="Type your response here"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fba843f503d3b7907f6cd4cfe195506582e1b067?placeholderIfAbsent=true&apiKey=49fcef25fa63406da67a3fa561ce9100"
              className="object-contain absolute right-2 bottom-2 z-0 w-3 h-3 aspect-square"
              alt="Input icon"
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center mt-4">
            <button className="py-2 pr-3 pl-4 text-xs font-bold leading-tight text-blue-600 capitalize bg-white rounded-md min-h-8">
              cancel
            </button>
            <button className="px-4 py-2 text-sm font-semibold leading-none text-white bg-violet-900 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DataRowProps {
  label: string;
  value: string;
}

const DataRow: React.FC<DataRowProps> = ({ label, value }) => (
  <div className="flex gap-10 items-center w-full text-sm leading-tight font-[450]">
    <span className="self-stretch my-auto text-slate-500 w-[200px]">
      {label}
    </span>
    <span className="self-stretch my-auto text-gray-900">{value}</span>
  </div>
);
