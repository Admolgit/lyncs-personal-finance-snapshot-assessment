/* eslint-disable @typescript-eslint/no-explicit-any */
import { getExpenses } from "../utils/calculations";

export default function BudgetProgress({
  transactions,
  budget,
  setBudget,
}: {
  transactions: any;
  budget: any;
  setBudget: any;
}) {
  const expenses = getExpenses(transactions);
  const percent = Math.min((expenses / budget) * 100, 100);

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-2">Budget</h2>

      <input
        type="number"
        value={budget}
        onChange={(e) => {
          const value = e.target.value;
          setBudget(value === "" ? "" : Number(value));
        }}
        className="border p-2 rounded mb-4"
      />

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-2">
        ${expenses} / ${budget}
      </p>
    </div>
  );
}
