/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITransaction {
  id?: string;
  date?: string;
  category?: string;
  description?: string;
  type?: string;
  amount?: string;
}

export const getIncome = (transactions: ITransaction[]) =>
  transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

export const getExpenses = (transactions: ITransaction[]) =>
  transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

export const getCategoryTotals = (transactions: ITransaction[]) => {
  const totals: any = {};

  transactions
    ?.filter((t) => t.type === "expense")
    ?.forEach((t) => {
      totals[t.category] = (totals[t.category] || 0) + Number(t.amount);
    });

  return Object.entries(totals).map(([name, value]) => ({ name, value }));
};

export const getMonthlySpending = (transactions: any) => {
  const months = {};

  transactions
    .filter((t: {type: string}) => t.type === "expense")
    .forEach((t: {date: string; amount: number}) => {
      const month = new Date(t.date).toLocaleString("default", {
        month: "short",
      });

      months[month] = (months[month] || 0) + Number(t.amount);
    });

  return Object.entries(months).map(([name, value]) => ({
    name,
    value,
  }));
};