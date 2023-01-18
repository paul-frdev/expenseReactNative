import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ExpenseForm } from '../components/manageExpense/ExpenseForm';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants';
import { AppContext } from '../store/AppContext';
import { ActionKind } from '../types/expense';
import { RootStackParamListRoute } from '../types/navigation';

const ManageExpense = ({ route, navigation }: RootStackParamListRoute) => {
  const { dispatch } = React.useContext(AppContext);
  const [editedId, setEditedId] = React.useState<any>();

  React.useEffect(() => {
    if (route.params) {
      setEditedId(route.params.expenseId);
    }
  }, [route.params])

  const isEditing = !!editedId;

  const deleteExpenseHandler = () => {
    dispatch({ type: ActionKind.DELETE, payload: { id: editedId } })
    navigation.goBack();
  }

  const cancelHandler = () => {
    navigation.goBack();
  }

  const confirmHandler = (expenseData: any) => {
    if (isEditing) {
      dispatch({
        type: ActionKind.UPDATE, payload: {
          currentId: editedId,
          id: editedId,
          description: 'UpdateTest',
          amount: 51.99,
          date: new Date('2023-01-16')
        }
      })
    } else {
      dispatch({
        type: ActionKind.ADD, payload: {
          id: Math.round(Math.random() * 1000),
          description: 'AddTest',
          amount: 51.99,
          date: new Date('2023-01-16')
        }
      })
    }
    navigation.goBack();
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing])

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
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
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center"
  }
});
