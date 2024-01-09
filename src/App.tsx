import { SetStateAction, useState } from "react";
import ExpenseFilter from "./components/ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import ExpenseList from "./components/ExpenseTracker/components/ExpenseList";
import categories from "./components/ExpenseTracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "a", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 10, category: "Utilities" },
    { id: 3, description: "c", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) return null;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
