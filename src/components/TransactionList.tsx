import { useState } from "react";
import type { ITransaction } from "../utils/calculations";
import Pagination from "./Pagination";

const DEFAULT_ITEMS_PER_PAGE = 10;
const ITEMS_OPTIONS = [5, 10, 20, 50];

export default function TransactionList({
  transactions,
  deleteTransaction,
}: {
  transactions: ITransaction[];
  deleteTransaction: (id: string | undefined) => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleItemsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Recent Transactions</h2>

      {transactions.length > 0 ? (
        <>
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="p-3 border-b">Date</th>
                <th className="p-3 border-b">Type</th>
                <th className="p-3 border-b">Category</th>
                <th className="p-3 border-b">Description</th>
                <th className="p-3 border-b">Amount</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentTransactions.map((t: ITransaction) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">
                    {t.type === "income" ? "Income" : "Expense"}
                  </td>
                  <td className="p-3">{t.category}</td>
                  <td className="p-3">{t.description}</td>

                  <td
                    className={`p-3 ${
                      t.type === "expense" ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {t.type === "expense" ? "-" : "+"}₦
                    {Number(t.amount).toLocaleString()}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {transactions.length > 0 && (
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="itemsPerPage" className="font-medium">
                  Transactions per page:
                </label>
                <select
                  id="itemsPerPage"
                  value={itemsPerPage}
                  onChange={handleItemsChange}
                  className="border rounded p-1"
                >
                  {ITEMS_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      ) : (
        <p>No transaction to display yet</p>
      )}
    </div>
  );
}
