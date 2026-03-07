/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useLocalStorage from "./hook/useLocalStorage";
import DashboardCards from "./components/DashboardCards";
import BudgetProgress from "./components/BudgetProgress";
import SpendingChart from "./components/SpendingChart";
import Insights from "./components/Insights";
import TransactionList from "./components/TransactionList";
import AddTransactionModal from "./components/AddTransactionModal";
import MonthlyChart from "./components/MonthlyChart";

export default function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [budget, setBudget] = useLocalStorage("budget", 2500);
  const [showModal, setShowModal] = useState(false);

  const addTransaction = (transaction: any) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t: { id: string }) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Personal Finance Snapshot</h1>

      <DashboardCards transactions={transactions} />

      <BudgetProgress
        transactions={transactions}
        budget={budget}
        setBudget={setBudget}
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <SpendingChart transactions={transactions} />
        </div>
        <div>
          <MonthlyChart transactions={transactions} />
        </div>
      </div>

      <Insights transactions={transactions} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
      >
        + Add Transaction
      </button>

      {showModal && (
        <AddTransactionModal
          addTransaction={addTransaction}
          close={() => setShowModal(false)}
          transactions={transactions}
          budget={budget}
        />
      )}
    </div>
  );
}
