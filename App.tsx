// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import CharacterList from './src/components/CharacterList/CharacterList';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CharacterList />
      </NavigationContainer>
    </Provider>
  );
}
