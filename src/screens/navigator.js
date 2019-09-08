import { createStackNavigator } from 'react-navigation-stack';
import DemoScreen from './DemoScreen/DemoScreen';
import FormScreen from './FormScreen/FormScreen';
import HomeScreen from './HomeScreen/HomeScreen';

export default createStackNavigator(
    {
        Demo: {
            screen: DemoScreen
        },
        Form: {
            screen: FormScreen
        },
        Home: {
            screen: HomeScreen
        }
    },
    {
        initialRouteName: "Home"
    }
);