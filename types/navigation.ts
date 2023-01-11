export type StackParamList = {
  AllExpenses: undefined;
  ManageExpense: undefined;
  RecentExpenses: undefined;
};

export type BottomStackParamList = {
  BottomNavigation: {
    ManageExpense: undefined;
    RecentExpenses: undefined;
  };
}

export type RootStackParamList = StackParamList & BottomStackParamList;