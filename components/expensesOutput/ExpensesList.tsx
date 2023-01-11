import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

interface ExpensesListProps {
  expenses: object[];
}

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  const renderExpenseItem = (itemData: any) => {
    return <Text>{itemData.item.description}</Text>
  }
  return (
    <View style={styles.container}>
      <Text>ExpensesList</Text>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {}
});
