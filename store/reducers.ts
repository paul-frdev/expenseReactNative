import { ActionKind, ExpenseType } from "../types/expense";

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
    currentId?: number;
    id: number;
    description: string;
    amount: number;
    date: Date;
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
      const id: number = Math.round(Math.random() * 10000);
      return [
        {
          ...action.payload
        },
        ...state,
      ];
    case ActionKind.DELETE:
      return [
        ...state.filter((expense: ExpenseType) => {
          return expense.id !== action.payload.id;
        }),
      ];
    case ActionKind.UPDATE:
      const updatableExpenseIndex = state.findIndex(
        (expense: ExpenseType) => expense.id === action.payload.currentId
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatableItem = { ...updatableExpense, ...action.payload.date };
      const updatableExpenses = [...state];
      updatableExpenses[updatableExpenseIndex] = updatableItem;
      return updatableExpenses;
    default:
      return state;
  }
};
