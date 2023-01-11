import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

interface AllExpensesProps {}

const AllExpenses = (props: AllExpensesProps) => {
  return (
     <ExpensesOutput expensesPeriod='Total'/>
  );
};

export default AllExpenses;

