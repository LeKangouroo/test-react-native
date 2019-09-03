import React, {Fragment} from 'react';

import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';

import styles from "./HomeScreen.styles";

class HomeScreen extends React.Component
{
    render()
    {
        return (
            <Fragment>
                <SafeAreaView>
                    <View>
                        <Text style={styles.title}>Hello World</Text>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default HomeScreen;