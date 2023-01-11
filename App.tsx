import { StatusBar } from 'expo-status-bar';
import { NativeNavigation } from './navigators/NativeNavigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeNavigation />
    </>
  );
}
