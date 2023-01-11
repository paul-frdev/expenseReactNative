import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ExpensesSummaryProps {
  periodName: string;
  expenses: object [];
}

const ExpensesSummary = ({ periodName, expenses }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((sum: any, currentItem: any) => {
    return sum + currentItem.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {}
});
