/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { getCategoryTotals } from "../utils/calculations";

export default function SpendingChart({ transactions }: any) {
  const data = getCategoryTotals(transactions);

  const COLORS = ["#6366f1", "#22c55e", "#f97316", "#ec4899", "#14b8a6"];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-4">Spending Breakdown</h2>

      <div>
        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="value" outerRadius={120}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div>
        
      </div>
    </div>
  );
}
