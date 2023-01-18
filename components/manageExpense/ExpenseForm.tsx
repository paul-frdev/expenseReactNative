import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from './Input'
import Button from '../UI/Button';


interface InputValuesProps {
  amount: string;
  date: string;
  description: string;
}

interface ExpenseFormProps {
  isEditing?: boolean;
  onCancel?: () => void;
  onSubmit?: (data: any) => void;
}

export const ExpenseForm = ({ isEditing, onCancel, onSubmit }: ExpenseFormProps) => {
  const [inputValues, setInputValues] = useState<InputValuesProps>({
    amount: "",
    date: "",
    description: ""
  });

  const inputChangedHandler = (inputIdentifier: string, enteredText: string) => {
    setInputValues((currentInputValues: any) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredText
      }
    });
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    };

    onSubmit?.(expenseData);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInfoConfig={{
            KeyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues['amount']
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInfoConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "Date"),
            value: inputValues["date"]
          }}
        />
      </View>
      <Input
        label="Description"
        textInfoConfig={{
          multiline: true,
          numberOfLines: 3,
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "Description"),
          value: inputValues["description"]
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginVertical: 24,
    textAlign: "center"
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  button: {
    width: 120,
    marginHorizontal: 8
  },
})