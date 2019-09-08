import React, {Fragment} from 'react';

import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';

import styles from "./FormScreen.styles";

class FormScreen extends React.Component
{
    render()
    {
        return (
            <Fragment>
                <SafeAreaView>
                    <View>
                        <Text style={styles.title}>Form Screen</Text>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default FormScreen;