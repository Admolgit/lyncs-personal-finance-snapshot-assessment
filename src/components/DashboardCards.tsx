/* eslint-disable @typescript-eslint/no-explicit-any */
import { getIncome, getExpenses } from "../utils/calculations";

export default function DashboardCards({ transactions }: any) {
  const income = getIncome(transactions);
  const expenses = getExpenses(transactions);
  const balance = income - expenses;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <Card title="Income" value={income} color="green" />
      <Card title="Expenses" value={expenses} color="red" />
      <Card title="Balance" value={balance} color="blue" />
    </div>
  );
}

function Card({ title, value, color }: { title: string; value: any; color: string }) {
  return (
    <div
      className={`p-6 rounded-xl bg-white shadow border-l-4 border-${color}-500`}
    >
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">${value}</p>
    </div>
  );
}
