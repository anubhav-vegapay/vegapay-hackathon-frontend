import React from "react";

const OverviewTab: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar already implemented elsewhere */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Overview Tab</h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin Name</span>
            <button>View More</button>
          </div>
        </div>

        {/* Ticket Details Section */}
        <div className="mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ticket Details</h3>
            <div className="grid grid-cols-3 gap-4">
              <div><strong>Creation Time:</strong> 10/12/23 10:00AM</div>
              <div><strong>Issue Type:</strong> Failed Payment</div>
              <div><strong>Priority:</strong> High</div>
            </div>
            <div className="mt-4">
              <strong>Subject:</strong> Transaction Related Issue
            </div>
            <div className="mt-4">
              <strong>Summary:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="mt-4">
              <strong>Soft Response:</strong>
              <input type="text" placeholder="Type your response here..." className="w-full mt-2" />
              <button className="mt-2">Submit</button>
            </div>
          </div>
        </div>

        {/* Account Summary Section */}
        <div className="mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Account Summary</h3>
            <div className="grid grid-cols-4 gap-4">
              <div><strong>Balance Summary:</strong> 75,000</div>
              <div><strong>Statement Summary:</strong> 50,000</div>
              <div><strong>Reward Summary:</strong> 1,000</div>
              <div><strong>EMI Preferences:</strong> 3 months</div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <table className="mb-6">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Transaction Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/12/23</td>
              <td>123456789</td>
              <td>Card Transaction</td>
              <td>10,000</td>
            </tr>
          </tbody>
        </table>

        {/* Charges Table */}
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LPG</td>
              <td>987654321</td>
              <td>5,000</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewTab;
