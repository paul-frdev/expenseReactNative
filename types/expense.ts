export type ExpenseType = {
  id: any;
  description?: string;
  amount: number;
  date: Date;
};

export enum ActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}