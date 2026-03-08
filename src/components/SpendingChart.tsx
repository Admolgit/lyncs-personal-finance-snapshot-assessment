import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { getCategoryTotals, type ITransaction } from "../utils/calculations";
import { useMemo } from "react";

export default function SpendingChart({
  transactions,
}: {
  transactions: ITransaction[];
}) {
  const data = useMemo(() => getCategoryTotals(transactions), [transactions]);

  const COLORS = ["#6366f1", "#22c55e", "#f97316", "#ec4899", "#14b8a6"];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-4">Spending Breakdown</h2>

      <div>
        {transactions.length > 0 ? (
          <PieChart width={400} height={300}>
            <Pie data={data} dataKey="value" outerRadius={120}>
              {data.map((_, index) => {
                return (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                );
              })}
            </Pie>
            <Tooltip />
          </PieChart>
        ) : (
          <p>No transaction yet</p>
        )}
      </div>
      <div></div>
    </div>
  );
}
