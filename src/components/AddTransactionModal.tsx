/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { categories } from "../utils/categories";

export default function AddTransactionModal({ addTransaction, close }: any) {
  const [form, setForm] = useState({
    type: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const submit = (e: any) => {
    e.preventDefault();

    if (form.description.length > 100) {
      return;
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
                aria-placeholder="Set type"
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
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
            {form.type === "expense" && (
              <select
                className="py-2 border outline:none w-full"
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            )}
          </div>
          <div className="w-full">
            <textarea
              className="px-2 border outline:none w-full"
              placeholder="Description"
              disabled={form.description.length > 100}
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
