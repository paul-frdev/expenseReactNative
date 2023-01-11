import { RootStackParamList } from '../types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from '../screens/ManageExpense';
import BottomTabsNavigation from './BottomTabsNavigation';

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export const NativeNavigation = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name="BottomNavigation" component={BottomTabsNavigation} options={{
          headerShown: false
        }} />
        <NativeStack.Screen name="ManageExpense" component={ManageExpense} />
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}