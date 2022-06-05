import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './pages/Landing'
import Option from './pages/Option';
import Quiz from './pages/Quiz'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={Landing} options={{headerShown: false}}/>
        <Stack.Screen name='Option' component={Option} options={{headerShown: false}}/>
        <Stack.Screen name='Quiz' component={Quiz} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
