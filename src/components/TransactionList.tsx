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

      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t: ITransaction) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>{t.description}</td>
              <td
                className={
                  t.type === "expense" ? "text-red-500" : "text-green-600"
                }
              >
                {t.type === "expense" ? "-" : "+"}${t.amount}
              </td>
              <td>
                <button onClick={() => deleteTransaction(t.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
