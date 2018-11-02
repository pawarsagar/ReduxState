import React from 'react';
import HomeScreen from './components/screens/HomeScreen'
import HistoryScreen from './components/screens/HistoryScreen'
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './components/redux/store'

export default class App extends React.Component {

  render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <Stack />
      </Provider>

    )
  }
}




const Stack = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  histroy: {
    screen: HistoryScreen,
    navigationOptions: () => ({
      headerVisible: true,
      title: 'History',
      headerStyle: {
        backgroundColor: 'rgb(252,90,85)',

      },
      headerTitleStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 20,
        headerTintColor: 'green'
      }

    }),
  },


}, {
    headerMode: 'screen',
    navigationOptions: {
      headerVisible: false,

    }
  });