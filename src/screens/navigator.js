import { createStackNavigator } from 'react-navigation-stack';

import DemoScreen from './DemoScreen/DemoScreen';
import DemoScreenNavigation from './DemoScreen/DemoScreen.navigation';

import FormScreen from './FormScreen/FormScreen';
import FormScreenNavigation from './FormScreen/FormScreen.navigation';

import HomeScreen from './HomeScreen/HomeScreen';
import HomeScreenNavigation from './HomeScreen/HomeScreen.navigation';

export default createStackNavigator(
    {
        Demo: {
            screen: DemoScreen,
            navigationOptions: DemoScreenNavigation
        },
        Form: {
            screen: FormScreen,
            navigationOptions: FormScreenNavigation
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: HomeScreenNavigation
        }
    },
    {
        initialRouteName: "Home"
    }
);