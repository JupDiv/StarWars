// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import CharacterList from './src/components/CharacterList/CharacterList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenFilms from './src/screens/ScreenFilms/ScreenFilms';
import ScreenStarShips from './src/screens/ScreeStarShips/ScreenStarShips';
import ScreenVehicles from './src/screens/ScreenVehicles/ScreenVehicles';
import {colors} from './src/styles/theme';

export type AppRootStackParams = {
  Home: undefined;
  ScreenFilms: {name: string};
  ScreenStarShips: {name: string};
  ScreenVehicles: {name: string};
};

const Stack = createNativeStackNavigator<AppRootStackParams>();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: `${colors.primary}`,
            },
            headerTintColor: `${colors.dark}`,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: `${colors.dark}`,
            },
          }}>
          <Stack.Screen name="Home" component={CharacterList} />
          <Stack.Screen
            options={{
              title: 'Films',
            }}
            name="ScreenFilms"
            component={ScreenFilms}
          />
          <Stack.Screen
            options={{
              title: 'Starships',
            }}
            name="ScreenStarShips"
            component={ScreenStarShips}
          />
          <Stack.Screen
            options={{title: 'Vehicles'}}
            name="ScreenVehicles"
            component={ScreenVehicles}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
