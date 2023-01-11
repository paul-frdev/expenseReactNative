import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ManageExpenseProps { }

const ManageExpense = (props: ManageExpenseProps) => {
  return (
    <Text style={styles.container}>ManageExpense</Text>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
