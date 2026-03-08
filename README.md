# Personal Finance Snapshot

A simple and interactive **personal finance dashboard** that helps users track their income, expenses, and monthly budget while visualizing spending patterns. You can plan your budget for a long period based on your preference. 

The goal of this project was to build a **clean, intuitive frontend application** that focuses on thoughtful user experience, clear financial insights, and maintainable code architecture.

---

# Live Demo

Deployed on **Vercel**

Vercel live link:

https://lyncs-personal-finance-snapshot-ass.vercel.app

Github link:

https://github.com/Admolgit/lyncs-personal-finance-snapshot-assessment

---

# Features

### Dashboard Overview

Displays a quick summary of financial status:

* Total income
* Total expenses
* Remaining balance

This allows users to quickly understand their financial position.

---

### Transaction Management

Users can easily add new transactions with:

* Amount
* Category
* Description
* Date
* Type (Income or Expense)

Transactions are instantly reflected in the dashboard and charts.

Adding expenses total amount greater than budget show warning toast after adding

Users can also **delete transactions** from the list on recent transactions.

---

### Budget Tracking

Users can define a monthly budget and track spending against it. Users can over spend but the system gives a warning and progress bar shows red to depict danger in finances.

Features include:

* Visual progress bar
* Clear indication when approaching or exceeding the budget
* Real-time updates when transactions change

---

### Spending Visualization

The app includes a **pie chart** that breaks down spending by category so users can easily understand where their money is going.

Expenses Categories include:

* Food
* Transport
* Bills
* Entertainment
* Shopping

Income Categories include: This is done for income category only no chart visualization.
* Salary,
* Freelance,
* Business,
* Investment,
* Other,

---

### Monthly Spending Chart

A bar chart visualizes total spending per month, helping users identify trends and patterns in their spending behavior.

---

### Smart Insights

The application automatically generates insights such as:

* Highest spending category
* Smallest spending category
* Median spending category
* Percentage of income spent
* Whether the user is over or under budget
* The percentage of budget spent

This adds an extra layer of **financial awareness** beyond simple tracking.

---

### Transaction Table

Transaction table is included to show recent transactions added. Transaction can be deleted from the list of trasactions. The table is paginated and number of transactions desire for a table per page can also be set.

### Persistent Data

All data is stored locally using **localStorage**, meaning:

* No backend is required
* Data remains available after refreshing the page

---

### Thoughtful User Experience

Several UX improvements were implemented to make the app feel polished:

* Modal form for adding transactions
* Click outside modal to close
* Clear empty states
* Color-coded income and expenses
* Smooth interactions
* Warning for overspending

---

# Tech Stack

Frontend framework:

* React

Build tool:

* Vite

Styling:

* Tailwind CSS

Charts:

* Recharts

Utilities:

* uuid

State persistence:

* localStorage

---

# Design Decisions

### LocalStorage Instead of Backend

Since the project requirements specified that a backend was not necessary, localStorage was used to persist transaction data. This allows the app to remain simple while still providing persistence.

---

### Component-Based Architecture

The application is broken into reusable components:

* Dashboard cards
* Charts
* Transaction list
* Budget tracker

This makes the application easier to extend and maintain.

---

### Data Visualization

Charts were included because financial data is easier to understand visually than through numbers alone. The pie chart and bar chart provide quick insights into spending behavior.

---

### UX Considerations

The interface prioritizes simplicity:

* Adding transactions is quick and accessible
* Key information is visible immediately
* Visual feedback helps users understand financial status

---

# Challenges Faced

### Managing Derived Financial Data

Calculating totals, category spending, and insights required careful handling of transaction data to ensure calculations stayed accurate after updates.

This was solved by centralizing logic inside a `calculations` utility module.

---

### Chart Data Formatting

The chart libraries required data to be transformed into specific formats. Utility functions were created to convert transaction data into chart-ready structures.

---

# Time Spent

Approximately **8 hours** over 2 days.

Time breakdown:

* Project setup and architecture
* Implementing core features
* Data visualization
* UX improvements and polish
* Deployment and documentation

---

# How to Run Locally

Clone the repository:

```
git clone https://github.com/your-username/finance-snapshot.git
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

---

# Final Notes

This project focuses on creating a **clean, usable financial dashboard** with thoughtful UX and clear data visualization while keeping the codebase simple and maintainable.

The goal was not to recreate a full finance app but to build a **polished, focused product experience** within the project constraints.
