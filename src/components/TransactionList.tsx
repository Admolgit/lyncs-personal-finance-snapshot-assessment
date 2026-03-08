import type { ITransaction } from "../utils/calculations";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TransactionList({
  transactions,
  deleteTransaction,
}: {
  transactions: any;
  deleteTransaction: any;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Recent Transactions</h2>

      {transactions.length > 0 ? (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Description</th>
              <th className="p-3 border-b">Amount</th>
              <th className="p-3 border-b"></th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t: ITransaction) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{t.date}</td>
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
      ) : (
        <p>No transaction to display yet</p>
      )}
    </div>
  );
}
