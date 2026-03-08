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
  const totals: Record<string, number> = {};

  transactions
    ?.filter((t) => t.type === "expense")
    ?.forEach((t) => {
      totals[t.category as string] =
        (totals[t.category as string] || 0) + Number(t.amount);
    });

  return Object.entries(totals).map(([name, value]) => ({ name, value }));
};

export const getMonthlySpending = (transactions: ITransaction[]) => {
  const months: Record<string, number> = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      const month = new Date(t.date as string).toLocaleString("default", {
        month: "short",
      });

      months[month] = (months[month] || 0) + Number(t.amount);
    });

  return Object.entries(months).map(([name, value]) => ({
    name,
    value,
  }));
};
