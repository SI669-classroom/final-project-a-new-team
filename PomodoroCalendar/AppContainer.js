import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function AppContainer() {
    const Stack = createNativeStackNavigator();
  
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' 
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
  export default AppContainer;