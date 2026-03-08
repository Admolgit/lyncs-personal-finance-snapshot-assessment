import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { expenseCategories, incomeCategories } from "../utils/categories";
import { getExpenses, type ITransaction } from "../utils/calculations";

export interface IAddTransactionModal {
  addTransaction: (transaction: ITransaction) => void;
  close: () => void;
  transactions: ITransaction[];
  budget: number;
}

export default function AddTransactionModal({
  addTransaction,
  close,
  transactions,
  budget,
}: IAddTransactionModal) {
  const [form, setForm] = useState({
    type: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const expenses = useMemo(() => getExpenses(transactions), [transactions]);

  const amount = Number(form.amount);
  const currentTotal = expenses + amount;

  const overBudget = currentTotal - budget;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.description.length > 100) {
      toast.error("Description length must not be greater than 100");
      return;
    }

    if (form.type === "expense" && currentTotal > budget) {
      toast.error(`⚠ You are ₦${overBudget} over your budget`);
    }

    addTransaction({
      ...form,
      id: uuid(),
    });

    close();
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center"
      onClick={close}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl w-[500px] space-y-3"
      >
        <h2 className="text-lg font-bold">Add Transaction</h2>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center gap-4">
            <div className="w-[50%]  ">
              <select
                className="py-2 border outline:none w-full"
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                    category:
                      e.target.value === "expense"
                        ? expenseCategories[0]
                        : incomeCategories[0],
                  })
                }
              >
                <option value="">Select type</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="w-[50%]  ">
              <input
                className="py-2 px-2 border outline:none w-full"
                placeholder="Set amount"
                type="number"
                required
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />
            </div>
          </div>
          <div>
            <select
              className="py-2 border outline-none w-full"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {(form.type === "expense"
                ? expenseCategories
                : incomeCategories
              ).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <textarea
              className="px-2 border outline:none w-full"
              placeholder="Description"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <p
              className={
                form.description.length > 100
                  ? "text-red-600 text-[12px]"
                  : "text-blue-600 text-[12px] "
              }
            >
              {form.description.length > 100
                ? "Description length more than required"
                : `${form.description.length} of 100`}
            </p>
          </div>
          <div>
            <input
              className="py-2 border outline:none w-full"
              type="date"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
