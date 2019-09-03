import { createStackNavigator } from 'react-navigation-stack';
import DemoScreen from './DemoScreen/DemoScreen';
import HomeScreen from './HomeScreen/HomeScreen';

export default createStackNavigator(
    {
        Demo: {
            screen: DemoScreen
        },
        Home: {
            screen: HomeScreen
        }
    },
    {
        initialRouteName: "Home"
    }
);