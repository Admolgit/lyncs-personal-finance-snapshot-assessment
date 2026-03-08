import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { getMonthlySpending, type ITransaction } from "../utils/calculations";
import { useMemo } from "react";

export default function MonthlyChart({
  transactions,
}: {
  transactions: ITransaction[];
}) {
  const data = useMemo(() => getMonthlySpending(transactions), [transactions]);

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-4">Monthly Spending</h2>

      {transactions.length > 0 ? (
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      ) : (
        <p>No transaction yet</p>
      )}
    </div>
  );
}
