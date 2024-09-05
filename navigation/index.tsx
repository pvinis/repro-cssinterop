import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackButton } from '../components/BackButton';
import Details from '../screens/details';
import Overview from '../screens/overview';
import { cssInterop } from 'nativewind';

export type RootStackParamList = {
  Overview: undefined;
  Details: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export function RootStackOld() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{
            headerTitleStyle: { color: 'green' },
            headerStyle: { backgroundColor: 'red' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

cssInterop(Stack.Screen, {
  headerClassName: 'options.headerStyle',
});

export default function RootStackNew() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{
            headerTitleStyle: { color: 'green' },
            // headerStyle: { backgroundColor: 'red' },
          }}
          headerClassName="bg-red-800"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
