/* eslint-disable @typescript-eslint/no-explicit-any */
import { getExpenses, getCategoryTotals } from "../utils/calculations";

export default function Insights({ transactions }: any) {
  const totals = getCategoryTotals(transactions);
  const expenses = getExpenses(transactions);
  
  const numberOfTransaction = transactions.filter(
    (t: any) => t.type === "expense",
  ).length;

  const biggest: {
    name: string;
    value: any;
  } = totals.sort(
    (a: { value: any }, b: { value: any }) => b.value - a.value,
  )[0];

  const smallest: {
    category: string;
    amount: number;
  } = transactions
    .filter((t: any) => t.type === "expense")
    .sort(
      (a: { amount: any }, b: { amount: any }) =>
        Number(a.amount) - Number(b.amount),
    )[0];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">Insights</h2>

      {biggest && smallest ? (
        <>
          <p>
            Your biggest expense category is <b>{biggest?.name}</b> (₦
            {biggest?.value})
          </p>
          <p>
            Your smallest expense category is <b>{smallest?.category}</b> (₦
            {smallest?.amount})
          </p>
          <p>
            Your spending median is (₦
            {(expenses / numberOfTransaction)?.toFixed(2)})
          </p>
        </>
      ) : (
        <p>No transaction yet</p>
      )}
    </div>
  );
}
