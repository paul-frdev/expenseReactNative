import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants';

interface ManageExpenseProps {
  id?: string;
}

const ManageExpense = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const editedId = route.params;

  const isEditing = !!editedId;

  const deleteExpenseHandler = () => {
    navigation.goBack();
  }

  const cancelHandler = () => {
    navigation.goBack();
  }

  const confirmHandler = () => {
    navigation.goBack();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing])

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center"
  }
});
