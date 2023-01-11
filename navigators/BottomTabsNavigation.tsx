import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from '../constants';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import { StackParamList } from '../types/navigation';
import { Ionicons } from "@expo/vector-icons";

const BottomTabsStack = createBottomTabNavigator<StackParamList>();

const BottomTabsNavigation = () => {
  return (
    <BottomTabsStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: "white",
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    }}>
      <BottomTabsStack.Screen name="AllExpenses" component={AllExpenses} options={{
        title: "All Expenses",
        tabBarLabel: "All Expenses",
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size}/>
      }} />
      <BottomTabsStack.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: "Recent expenses",
        tabBarLabel: "Recent",
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size}/>
      }} />
    </BottomTabsStack.Navigator>
  );
};

export default BottomTabsNavigation;


