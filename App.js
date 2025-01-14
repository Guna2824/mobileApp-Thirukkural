import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen 
            name="home" 
            component={HomeScreen} 
            options={{
              title: 'திருக்குறள்',
              headerStyle: { backgroundColor: 'royalblue' },
              headerTitleStyle: { fontWeight: 'bold', fontSize: 18, color: 'white' },
              headerTitleAlign: 'center'
            }} 
          />
          <Stack.Screen 
            name="detail" 
            component={DetailScreen} 
            options={({route})=>({
              title: route.params?.headerTitle || 'Details',
              headerStyle: { backgroundColor: 'purple' },
              headerTitleStyle: { fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'white' },
              headerTitleAlign: 'center'
            })} 
          />
        </Stack.Navigator>
        <StatusBar style="auto" backgroundColor="white" />
      </NavigationContainer>
  );
}
