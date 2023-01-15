import { ExpenseType } from "../types/expense";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

export type InitialExpenseStateType = {
  expenses: ExpenseType[];
};

type ExpensePayload = {
  [ActionKind.ADD]: {
    id: number;
    description: string;
    amount: number;
    date: Date;
  };
  [ActionKind.DELETE]: {
    id: number;
  };
  [ActionKind.UPDATE]: {
    id: number;
    data: ExpenseType;
  };
};

export type ExpenseActions =
  ActionMap<ExpensePayload>[keyof ActionMap<ExpensePayload>];

export const expenseReducer = (
  state: ExpenseType[],
  action: ExpenseActions
) => {
  switch (action.type) {
    case ActionKind.ADD:
      const id = Math.round(Math.random() * 10000);
      return [
        ...state,
        {
          id: id,
          description: action.payload.description,
          amount: action.payload.amount,
          date: action.payload.date,
        },
      ];
    case ActionKind.DELETE:
      return [...state.filter((expense: ExpenseType) => expense.id !== action.payload.id)];
    case ActionKind.UPDATE:
      const updatableExpenseIndex = state.findIndex(
        (expense: ExpenseType) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatableItem = { ...updatableExpense, ...action.payload.data };
      const updatableExpenses = [...state];
      updatableExpenses[updatableExpenseIndex] = updatableItem;
      return updatableExpenses;
    default:
      return state;
  }
};
