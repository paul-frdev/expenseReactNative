import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { DUMMY_EXPENSES, GlobalStyles } from '../../constants';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

interface ExpensesOutputProps {
  expenses?: object [];
  expensesPeriod:  string;
}

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});
