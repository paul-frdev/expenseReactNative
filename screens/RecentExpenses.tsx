import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

interface RecentExpensesProps { }

const RecentExpenses = (props: RecentExpensesProps) => {
  return (
    <ExpensesOutput expensesPeriod="Last 7 Days"/>
  );
};

export default RecentExpenses;

