import { useMemo } from "react";
import {
  getExpenses,
  getCategoryTotals,
  type ITransaction,
} from "../utils/calculations";

export default function Insights({
  transactions,
}: {
  transactions: ITransaction[];
}) {
  const totals = useMemo(() => getCategoryTotals(transactions), [transactions]);
  const expenses = useMemo(() => getExpenses(transactions), [transactions]);

  const numberOfTransaction = transactions.filter(
    (t) => t.type === "expense",
  ).length;

  const biggest = totals.sort((a, b) => b.value - a.value)[0];

  const smallest = transactions
    .filter((t) => t.type === "expense")
    .sort((a, b) => Number(a.amount) - Number(b.amount))[0];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">Insights</h2>

      {biggest && smallest ? (
        <>
          <p>
            Your biggest expense category is <b>{biggest?.name}</b> (₦
            {Number(biggest?.value).toLocaleString()})
          </p>
          <p>
            Your smallest expense category is <b>{smallest?.category}</b> (₦
            {Number(smallest?.amount).toLocaleString()})
          </p>
          <p>
            Your spending/expense median is (₦
            {Number(
              (expenses / numberOfTransaction).toFixed(2),
            ).toLocaleString()}
            )
          </p>
        </>
      ) : (
        <p>No transaction yet</p>
      )}
    </div>
  );
}
