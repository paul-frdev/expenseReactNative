import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants';
import { AppContext } from '../store/AppContext';
import { ActionKind } from '../types/expense';
import { RootStackParamListRoute } from '../types/navigation';

const ManageExpense = ({ route, navigation }: RootStackParamListRoute) => {
  const { dispatch } = React.useContext(AppContext);
  const [editedId, setEditedId] = React.useState<any>();

  console.log(editedId);

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

  const confirmHandler = () => {
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
