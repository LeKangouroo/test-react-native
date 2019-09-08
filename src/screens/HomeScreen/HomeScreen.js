import React, {Fragment} from 'react';

import {
    Button,
    SafeAreaView,
    View,
    Text,
} from 'react-native';

import styles from "./HomeScreen.styles";

class HomeScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress(screenName)
    {
        this.props.navigation.navigate(screenName);
    }

    render()
    {
        return (
            <Fragment>
                <SafeAreaView>
                    <View>
                        <Text style={styles.title}>Home Screen</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button title="DemoScreen" onPress={() => this.onButtonPress("Demo")}/>
                        <Button title="FormScreen" onPress={() => this.onButtonPress("Form")}/>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default HomeScreen;