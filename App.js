import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppNavigation />
  );
}




function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Store'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}