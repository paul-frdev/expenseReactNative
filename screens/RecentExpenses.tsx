import { useContext } from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { AppContext } from '../store/AppContext';
import { ExpenseType } from '../types/expense';
import { getDateMinusDays } from '../utils/date';

interface RecentExpensesProps { }

const RecentExpenses = (props: RecentExpensesProps) => {
  const expensesCnx = useContext(AppContext);

  const resentExpenses = expensesCnx.state.expenses.filter((expense: ExpenseType) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date > dateSevenDaysAgo;
  })
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={resentExpenses}
      fallBackText="No recent expenses registered for the last 7 days"
    />

  );
};

export default RecentExpenses;

