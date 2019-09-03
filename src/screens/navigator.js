import { createStackNavigator } from 'react-navigation-stack';
import DemoScreen from './DemoScreen/DemoScreen';

export default createStackNavigator({
    Demo: {
        screen: DemoScreen
    }
});